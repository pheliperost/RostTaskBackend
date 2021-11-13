
exports.up = function(knex) {
    return knex.schema.table('events', function(t) {
        t.dropColumns('StartedAtSch','endedAtSch');
    });
};

exports.down = function(knex) {
    return knex.schema.table('events', function(t) {
            t.datetime('StartedAtSch').notNull();
            t.datetime('endedAtSch').notNull();
    });
};
