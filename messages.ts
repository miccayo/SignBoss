type Messages = {
  [key: string]: string;
}

const messages: Messages = {
  // Server messages
  StartRequested: 'Server start requested on port {0}.',
  StartSuccess: 'Server started successfully on port {0}.',
  StartFailure: 'Server failed to start on port {0}.',
  // Exception handling messages
  UnhandledException: 'An unhandled exception occurred. Error: {0}',
  UnhandledRejection: 'An unhandled promise rejection occurred. Error: {0}',
  // Database messages
  DbConnectionSuccess: 'Database connection successful.',
  DbConnectionFailure: 'Database connection failed. Error: {0}',
  DbSyncSuccess: 'Database synchronization successful.',
  DbSyncFailure: 'Database synchronization failed. Error: {0}',
}

export const getMessage = (message: string, arg: string) => {
  let messageText = messages[message];
  if (messageText.indexOf("{0}") > -1) {
    messageText = messageText.replace("{0}", arg);
  }
  return messageText;
}
