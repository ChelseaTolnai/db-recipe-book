exports.seed = function(knex, Promise) {
  return knex('instructions')
    .truncate()
    .then(function () {
      return knex('instructions').insert([
        { recipe_id: 1, 
          details: `[
          'Knead the pizza dough.', 
          'Let the dough rise.', 
          'Flatten dough ball and stretch out into a round.',
          'Spread with tomato sauce.', 
          'Sprinkle with shredded cheese.',
          'Bake pizza at 475°F for 10-15 minutes.'
          ]`
        },
        { recipe_id: 2, 
          details: `[
          'Knead the pizza dough.', 
          'Let the dough rise.', 
          'Flatten dough ball and stretch out into a round.',
          'Bake flattened dough at 400°F for 10-12 minutes.',
          'Meanwhile, in skillet, thoroughly cook ground beef and diced bacon. Drain.',
          'Spread tomato sauce on crust.', 
          'Sprinkle with shredded cheese.',
          'Slice pepperoni and lay slices on pizza. Sprinkle with cooked beef and bacon.',
          'Bake pizza for additional 10-12 minutes.'
          ]`
        },
        { recipe_id: 3, 
          details: `[
          'In skillet, thoroughly cook ground beef with taco seasoning. Drain.',
          'Spoon cooked beef into taco shells.',
          'Sprinkle with shredded cheese and shredded lettuce.',
          'Spoon on diced tomatoes and salsa.'
          ]`
        },
        { recipe_id: 4, 
          details: `[
          'In skillet, thoroughly cook ground beef with taco seasoning. Drain.',
          'In pot, cook drained black beans.',
          'Spoon cooked beef into taco shells.',
          'Spoon black beans and diced tomatoes onto taco.',
          'Sprinkle with shredded cheese.'
          ]`
        },
      ]);
    });
};
