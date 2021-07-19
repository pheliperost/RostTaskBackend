module.exports = {
    client: 'postgresql',
    connection: {
      database: 'tasks',
      user:     'postgres',
      password: 'P@llet0605'
    },
    pool: {
      min: 5,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
