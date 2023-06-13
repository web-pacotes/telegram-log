/**
 * Exposes the required headers to interact with Telegram API.
 *
 * @returns An {@link Headers} instance to be passed on `fetch` requests for interaction with Telegram API.
 */
export default function (): Headers {
	const headers = new Headers();

	headers.set('Content-Type', 'application/json');
	return headers;
}
