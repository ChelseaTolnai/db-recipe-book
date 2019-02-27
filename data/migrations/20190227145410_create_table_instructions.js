exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', function(tbl) {
        tbl.increments();
        tbl.integer('recipe_id')
           .unique()
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('recipes');
        tbl.specificType('details', 'TEXT[]');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions');
};