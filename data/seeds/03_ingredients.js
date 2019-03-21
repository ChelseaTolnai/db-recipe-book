exports.seed = function(knex, Promise) {
  return knex('ingredients')
    .truncate()
    .then(function () {
      return knex('ingredients').insert([
        {name: 'pizza dough', quantity_amount: 1, quantity_type: 'lb'},
        {name: 'shredded mozzarella cheese', quantity_amount: 2, quantity_type: 'cup'},
        {name: 'tomato sauce', quantity_amount: 1, quantity_type: 'cup'},
        {name: 'shredded mozzarella cheese', quantity_amount: 1, quantity_type: 'cup'},
        {name: 'pepperoni', quantity_amount: .5, quantity_type: 'lb'},
        {name: 'ground beef', quantity_amount: .5, quantity_type: 'lb'},
        {name: 'bacon', quantity_amount: .5, quantity_type: 'lb'},
        {name: 'taco shells', quantity_amount: 4},
        {name: 'shredded cheddar cheese', quantity_amount: 1, quantity_type: 'cup'},
        {name: 'taco seasoning', quantity_amount: 2, quantity_type: 'tbsp'},
        {name: 'shredded lettuce', quantity_amount: .5, quantity_type: 'head'},
        {name: 'diced tomatoes', quantity_amount: 1, quantity_type: 'can'},
        {name: 'salsa', quantity_amount: 1, quantity_type: 'cup'},
        {name: 'black beans', quantity_amount: 1, quantity_type: 'can'},
      ]);
    });
};
