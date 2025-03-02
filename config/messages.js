const messages = {
  // General messages
  startRequested: 'Server start requested on port',
  startSuccess: 'Server started successfully on port', //  `${port}.`
  // Javascript messages
  unhandledException: 'An unhandled exception has occurred.',
  unhandledRejection: 'An unhandled promise rejection has occurred.',
  // Database messages
  dbTestConnectionSuccess: 'Database test connection successful.',
  dbTestCloseConnectionFailure: 'Failed to close test connection to database.', // `${err}`
  dbTestConnectionFailure: 'Failed test connection to database.', // `${err}`
  dbConnectionSuccess: 'Database connection successful.',
  dbConnectionFailure: 'Failed to connect to the database.', // `${err}`
  dbSyncSuccess: 'Database synchronized successfully.',
  dbSyncFailure: 'Database synchronization failed.' // `${err}`
}

module.exports = (decode, msg) => {
  if (messages[decode] === undefined) return `Unknown message decode. Message provided: ${msg}`
  if (msg) return `${messages[decode]} ${msg}`
  return messages[decode]
}
