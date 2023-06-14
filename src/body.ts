/**
 * Composes the request body for sending a message to a telegram chat, as a JSON string.
 *
 * @param chatId - The id of the chat where the message will be sent.
 * @param message - The message to be sent.
 */
export function sendMessageBody(chatId: string, message: string) {
	const body = {
		text: message,
		chat_id: chatId
	};

	return JSON.stringify(body);
}
