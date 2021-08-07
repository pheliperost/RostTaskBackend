
exports.up = function(knex, Promise) {
    return knex.schema.createTable('events', table => {
        table.increments('id').primary()
        table.string('desc').notNull()
        table.datetime('date')
        table.datetime('startedAt')
        table.datetime('endedAt')
        table.integer('eventType').references('id')
            .inTable('eventType').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('events')
};
