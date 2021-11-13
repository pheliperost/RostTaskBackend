const v1 = require('../queries/views/EventsView/v1');

exports.up = async function(knex) {
    await knex.raw(v1.up);
};

exports.down = async function(knex) {
    await knex.raw(v1.down);
};

