import pino from 'pino';
import pino_pretty from 'pino-pretty';
const logger = pino(pino_pretty());
import { getMessage } from './messages.ts';
import { app } from './app.ts';

const serverPort = process.env.WEB_PORT || 8043;
logger.info(getMessage('StartRequested', serverPort.toString()));

app.listen(serverPort, () => {
  logger.info(getMessage('StartSuccess', serverPort.toString()));
});

process.on('uncaughtException', (error: Error) => {
  logger.error(getMessage('UnhandledException', error.message));
  process.exit(1);
});

process.on('unhandledRejection', (error: Error) => {
  logger.error(getMessage('UnhandledRejection', error.message));
  process.exit(1);
});
