
exports.up = function(knex) {
     return knex.schema.createTable('eventscalendar', table => {
        table.increments('id').primary()        
        table.string('url')
        table.datetime('dtstamp')
        table.integer('startdate')
        table.integer('enddate')        
        table.string('description')
        table.string('location')
        table.string('status')
        table.string('summary')
        table.string('date')
        table.string('month')
        table.string('hour')
        table.string('lastmodified')
        table.datetime('start')
        table.datetime('end')
        
    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable('eventscalendar')
};
