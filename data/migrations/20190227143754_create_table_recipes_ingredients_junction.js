exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes_ingredients_junction', function(tbl) {
        tbl.increments();
        tbl.integer('recipe_id')
           .notNullable()
           .references('id')
           .inTable('recipes')
           .onDelete('CASCADE');
        tbl.integer('ingredient_id')
           .notNullable()
           .references('id')
           .inTable('ingredients')
           .onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes_ingredients_junction');
};