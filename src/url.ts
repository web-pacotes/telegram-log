const telegramApiUrl = 'https://api.telegram.org';

/**
 * Exposes the URL endpoint for sending a message to a Telegram chat using Telegram API.
 *
 * @param token - API Token of the bot that will send the message.
 * @returns An instance of the {@link URL} class that represents the endpoint for HTTP clients to consume.
 */
export default function (token: string): URL {
	const endpoint = `${telegramApiUrl}/bot${token}/sendMessage`;

	return new URL(endpoint);
}
