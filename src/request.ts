import { sendMessageBody } from './body';
import { TelegramOptions } from './model';
import url from './url';

export function sendMessageRequest(
	message: string,
	options: TelegramOptions
): Request {
	const method = 'POST';
	const endpoint = url(options.botToken);

	const data = sendMessageBody(options.chatId, message);

	const init = <RequestInit>{
		method: method,
		body: data
	};

	return new Request(endpoint, init);
}
