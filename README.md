# telegram-log

Logs messages to a Telegram channel

![npm version](https://badgen.net/npm/v/@web-pacotes/telegram-log) ![npm total downloads](https://badgen.net/npm/dt/@web-pacotes/telegram-log) ![bundlephobia bundle size](https://badgen.net/bundlephobia/min/@web-pacotes/telegram-log)

---

## How to use

To use this package, you will need a Telegram BOT and a Telegram group chat.

```typescript
import { default as handler, TelegramOptions } from '@web-pacotes/telegram-log';

async function main() {
	const telegramOptions = <TelegramOptions>{
		botToken: 'your-telegram-bot-token',
		chatId: 'you-telegram-chat-id'
	};

	const result = await handler('Hello from telegram-log!!!', telegramOptions);

	console.log(result);
}

main();
```

## Features

- Sends a message to a Telegram group chat.

---

## Scripts

- `npm run build` to transpile and bundle files in `.cjs`, `.js`, `.d.ts` and respective source-maps
- `npm run start` to run the project with `swc` compilation

- `npm run test` to run the unit tests
- `npm run lint` to analyze and lint the project
- `npm run format` to format the project based on lint feedback
- `npm run docs` to generate docs site
- `npm run docs:publish` to generate docs site and publish it to GitHub Pages

- `npm run release` to create the temporary changesets file
- `npm run publish` to publish the package to NPM

## Hooks

This repository is configured with client-side Git hooks that automatically format + lint the codebase before each push. You can install it by running the following command:

```bash
./hooks/INSTALL
```

## Automatically Publishing to NPM

To automatically publish the package to NPM, you will need to grab a token of the publisher account for CI usage, and set it as a repository secret in GitHub under the `NPM_TOKEN` identifier.

---

### Bugs and Contributions

Found any bug (including typos) in the package? Do you have any suggestion
or feature to include for future releases? Please create an issue via
GitHub in order to track each contribution. Also, pull requests are very
welcome!
