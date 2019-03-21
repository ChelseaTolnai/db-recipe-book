exports.seed = function(knex, Promise) {
  return knex('dishes')
    .truncate()
    .then(function () {
      return knex('dishes').insert([
        {name: 'pizza'},
        {name: 'tacos'},
      ]);
    });
};
