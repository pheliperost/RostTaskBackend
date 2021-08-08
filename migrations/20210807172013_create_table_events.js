
exports.up = function(knex, Promise) {
    return knex.schema.createTable('events', table => {
        table.increments('id').primary()
        table.datetime('date')
        table.datetime('StartedAtSch')
        table.datetime('endedAtSch')
        table.datetime('startedAt')
        table.datetime('endedAt')
        table.string('Obs')
        table.integer('eventType').references('id')
            .inTable('eventType').notNull()
        table.integer('student').references('id')
        .inTable('students').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('events')
};
