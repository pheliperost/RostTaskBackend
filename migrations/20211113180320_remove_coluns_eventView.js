const v2 = require('../queries/views/EventsView/v2');

exports.up = async function(knex) {
    await knex.raw(v2.up);
};

exports.down = async function(knex) {
    await knex.raw(v2.down);
};

