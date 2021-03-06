exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients_junction')
    .truncate()
    .then(function () {
      return knex('recipes_ingredients_junction').insert([
        {recipe_id: 1, ingredient_id: 1},
        {recipe_id: 1, ingredient_id: 2},
        {recipe_id: 1, ingredient_id: 3},

        {recipe_id: 2, ingredient_id: 1},
        {recipe_id: 2, ingredient_id: 3},
        {recipe_id: 2, ingredient_id: 4},
        {recipe_id: 2, ingredient_id: 5},
        {recipe_id: 2, ingredient_id: 6},
        {recipe_id: 2, ingredient_id: 7},

        {recipe_id: 3, ingredient_id: 6},
        {recipe_id: 3, ingredient_id: 8},
        {recipe_id: 3, ingredient_id: 9},
        {recipe_id: 3, ingredient_id: 10},
        {recipe_id: 3, ingredient_id: 11},
        {recipe_id: 3, ingredient_id: 12},
        {recipe_id: 3, ingredient_id: 13},

        {recipe_id: 4, ingredient_id: 4},
        {recipe_id: 4, ingredient_id: 6},
        {recipe_id: 4, ingredient_id: 8},
        {recipe_id: 4, ingredient_id: 10},
        {recipe_id: 4, ingredient_id: 12},
        {recipe_id: 4, ingredient_id: 14},
      ]);
    });
};
