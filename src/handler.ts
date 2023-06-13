import { TelegramOptions } from './model';
import { sendMessageRequest } from './request';
import {
	TelegramApiSendMessageFailureReponse,
	TelegramApiSendMessageSuccessReponse
} from './response';
import { transformSendMessageResponse } from './transform';

export default async function handler(
	message: string,
	options: TelegramOptions
): Promise<
	TelegramApiSendMessageSuccessReponse | TelegramApiSendMessageFailureReponse
> {
	const request = sendMessageRequest(message, options);

	const response = await fetch(request);

	return await transformSendMessageResponse(response);
}
