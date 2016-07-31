module.exports.connections = {
  localDiskDb: {
    adapter: 'sails-disk'
  },
  postgres: {
    adapter: 'sails-postgresql',
    host: 'localhost',
    user: 'postgres',
    password: 'ym2r157',
    database: 'gestaoavista',
    timezone: 'utc'
  },
  redis: {
    port: 6379,
    host: 'localhost'
  },
  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true
};
