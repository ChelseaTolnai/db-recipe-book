exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl.increments();
        tbl.string('name', 256).notNullable();
        tbl.float('quantity_amount').notNullable();
        tbl.string('quantity_type', 128);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};