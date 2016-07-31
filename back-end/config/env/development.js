module.exports = {
  models: {
    connection:'postgres',
    migrate: 'alter'
  },
  log: {
    level: 'info',
    filePath: 'application.dev.log'
  },
  port:3003,
  hookTimeout: 10000000
};
