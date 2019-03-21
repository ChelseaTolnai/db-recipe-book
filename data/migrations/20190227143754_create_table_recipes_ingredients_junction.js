exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes_ingredients_junction', function(tbl) {
        tbl.integer('recipe_id')
           .notNullable()
           .references('id')
           .inTable('recipes')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
        tbl.integer('ingredient_id')
           .notNullable()
           .references('id')
           .inTable('ingredients')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
        tbl.primary(['recipe_id', 'ingredient_id']);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes_ingredients_junction');
};