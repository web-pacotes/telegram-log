import { sendMessageBody } from './body';
import header from './header';
import { TelegramOptions } from './model';
import url from './url';

export function sendMessageRequest(
	message: string,
	options: TelegramOptions
): Request {
	const method = 'POST';
	const endpoint = url(options.botToken);
	const headers = header();

	const data = sendMessageBody(options.chatId, message);

	const init = <RequestInit>{
		method: method,
		body: data,
		headers: headers
	};

	return new Request(endpoint, init);
}
