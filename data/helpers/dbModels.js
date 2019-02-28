const db = require('../dbConfig');

function getDishes() {
    return db('dishes').select('*');
}

function addDish(dish) {
    return db('dishes').insert(dish);
}

function getDish(id) {
    return db('dishes')
        .select('dishes.id as DishID', 'dishes.name as DishName', 'recipes.name as RecipeName')
        .leftJoin('recipes', 'recipes.dish_id', 'dishes.id')
        .where('dishes.id', id);
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