import { expect, test, describe } from '@jest/globals';
import { transformSendMessageResponse } from './transform';

describe('transformSendMessageResponse', function () {
	test('unmarshalls response body if status is ok', async function () {
		const ok = true;
		const body = {};

		const response = <Response>{
			ok: ok,
			text: () => Promise.resolve(JSON.stringify(body))
		};

		const typedReponse = await transformSendMessageResponse(response);

		expect(typedReponse).not.toBeUndefined();
	});

	test('unmarshalls response body to TelegramApiSendMessageSuccessReponse', async function () {
		const ok = true;
		const body = {
			ok: true,
			result: {
				message_id: 2970,
				from: {
					id: 1000000001,
					is_bot: true,
					first_name: 'first_name',
					username: 'username'
				},
				chat: {
					id: -100000000,
					title: 'title',
					type: 'type',
					all_members_are_administrators: true
				},
				date: 1686684434,
				text: 'message'
			}
		};

		const response = <Response>{
			ok: ok,
			text: () => Promise.resolve(JSON.stringify(body))
		};

		const typedReponse = await transformSendMessageResponse(response);

		expect(typedReponse).not.toBeUndefined();
		expect(typedReponse).toEqual(
			expect.objectContaining({
				ok: true,
				result: {
					message_id: 2970,
					from: {
						id: 1000000001,
						is_bot: true,
						first_name: 'first_name',
						username: 'username'
					},
					chat: {
						id: -100000000,
						title: 'title',
						type: 'type',
						all_members_are_administrators: true
					},
					date: 1686684434,
					text: 'message'
				}
			})
		);
	});

	test('unmarshalls response body if status is not ok', async function () {
		const ok = false;
		const body = {};

		const response = <Response>{
			ok: ok,
			text: () => Promise.resolve(JSON.stringify(body))
		};

		const typedReponse = await transformSendMessageResponse(response);

		expect(typedReponse).not.toBeUndefined();
	});

	test('unmarshalls response body to TelegramApiSendMessageFailureReponse', async function () {
		const ok = true;
		const body = {
			ok: false,
			error_code: 404,
			description: 'Not Found'
		};

		const response = <Response>{
			ok: ok,
			text: () => Promise.resolve(JSON.stringify(body))
		};

		const typedReponse = await transformSendMessageResponse(response);

		expect(typedReponse).not.toBeUndefined();
		expect(typedReponse).toEqual(
			expect.objectContaining({
				ok: false,
				error_code: 404,
				description: 'Not Found'
			})
		);
	});
});
