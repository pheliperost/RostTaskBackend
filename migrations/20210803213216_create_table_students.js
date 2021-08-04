
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.datetime('registryDate').notNull()
        table.boolean('active')
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('students')
};
