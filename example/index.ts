import { default as handler, TelegramOptions } from 'telegram-log';

async function main() {
	const telegramOptions = <TelegramOptions>{
		botToken: 'your-telegram-bot-token',
		chatId: 'you-telegram-chat-id'
	};

	const result = await handler('Hello from telegram-log!!!', telegramOptions);

	console.log(result);
}

main();
