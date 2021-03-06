/**
 * @name onListening
 * @description Function called when the server is listening
 * @memberof module:Server
 * @function
 * @param {*} server
 * @param {*} sequelize
 */
const onListening = server => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
};

module.exports = onListening;
