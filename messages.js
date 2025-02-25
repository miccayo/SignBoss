const messages = {
  // General messages
  startRequested: 'Server start requested on port',
  // Javascript messages
  unhandledException: 'An unhandled exception has occurred.',
  unhandledRejection: 'An unhandled promise rejection has occurred.',
  // Database messages
  dbTestConnectionSuccess: 'Database test connection successful.',
  dbTestCloseConnectionFail: 'Failed to close test connection to database.', // `${err}`
  dbTestConnectionFail: 'Failed test connection to database.', // `${err}`
  dbConnectionSuccess: 'Database connection successful.',
  dbConnectionFail: 'Failed to connect to the database.' // `${err}`
}

module.exports = (decode, msg) => {
  if (msg) return `${messages[decode]} ${msg}`
  return messages[decode]
}
