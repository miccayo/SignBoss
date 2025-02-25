const errorMessages = {
  unhandledException: 'An unhandled exception has occurred.',
  unhandledRejection: 'An unhandled promise rejection has occurred',
  dbConnectionFailed: 'Failed to connect to the database.'
}

module.exports = (decode, msg) => {
  return `${errorMessages[decode]} ${msg}`
}
