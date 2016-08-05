module.exports = {
  models: {
    connection:'postgres',
    migrate: 'safe'
  },
  log: {
    level: 'info',
    filePath: 'application.prod.log'
  },
  port:3003,
  hookTimeout: 10000000
};
