exports.seed = function(knex, Promise) {
  return knex('recipes')
    .truncate()
    .then(function () {
      return knex('recipes').insert([
        {name: 'extra cheese', dish_id: 1},
        {name: 'meat lovers', dish_id: 1},
        {name: 'tex-mex', dish_id: 2},
        {name: 'granny\'s', dish_id: 2},
      ]);
    });
};
