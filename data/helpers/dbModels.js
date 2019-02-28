const db = require('../dbConfig');

function getDishes() {
    return db('dishes').select('*');
}

function addDish(dish) {
    return db('dishes').insert(dish);
}

async function getDish(id) {
    // return db('dishes')
    //     .select('dishes.id as DishID', 'dishes.name as DishName', 'recipes.name as RecipeName')
    //     .leftJoin('recipes', 'recipes.dish_id', 'dishes.id')
    //     .where('dishes.id', id)
    const dish = await db('dishes')
        .select('*')
        .where({ id });
    const recipes = await db('recipes')
        .select('*')
        .where('dish_id', id)
        .map(dish => dish.name)
    return dish.length ? {'dishID': id, 'dishName': dish[0].name, 'recipes': recipes} : null ;
}

function getRecipes() {
    return db('recipes')
        .select('recipes.id as RecipeID', 'recipes.name as RecipeName', 'dishes.name as DishName')
        .join('dishes', 'recipes.dish_id', 'dishes.id');
}

function addRecipe(recipe) {
    return db('recipes').insert(recipe);
}

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,
}