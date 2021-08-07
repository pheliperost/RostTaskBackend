exports.up = function(knex, Promise) {
    return knex.schema.createTable('eventType', table => {
        table.increments('id').primary()
        table.string('type').notNull()
        table.float('value',5,2)       
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('eventType')
};
