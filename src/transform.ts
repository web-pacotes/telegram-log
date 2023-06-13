import {
	TelegramApiSendMessageFailureReponse,
	TelegramApiSendMessageSuccessReponse
} from './response';

/**
 * Unmarshalls the response body of a request to send message using Telegram API as a {@link TelegramApiSendMessageSuccessReponse}
 * instance, if nothing failed in the request, otherwise {@link TelegramApiSendMessageFailureReponse}.
 *
 * @param response - Fetch response received from Telegram API
 * @returns The response model typed as {@link TelegramApiSendMessageSuccessReponse} or {@link TelegramApiSendMessageFailureReponse} if anything failed.
 */
export async function transformSendMessageResponse(
	response: Response
): Promise<
	TelegramApiSendMessageSuccessReponse | TelegramApiSendMessageFailureReponse
> {
	const data = await response.text();

	if (response.ok) {
		return <TelegramApiSendMessageSuccessReponse>{ ...JSON.parse(data) };
	}

	return <TelegramApiSendMessageFailureReponse>{ ...JSON.parse(data) };
}
