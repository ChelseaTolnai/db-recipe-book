const express = require('express');

const db = require('../../data/helpers/dbModels');

const recipesRouter = express.Router();

recipesRouter.get('/', async (req, res, next) => {
    try {
        const recipes = await db.getRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({error: "Error getting recipes."})
    }
});

recipesRouter.post('/', async (req, res) => {
    try {
        const recipe = req.body;
        if (recipe.name || recipe.dish_id) {
          const [id] = await db.addRecipe(recipe);
          res.status(201).json(id)
        } else {
          res.status(400).json({error: "Recipe name and Dish ID required."})
        }
    } catch (error) {
        res.status(500).json({error: "Error adding recipe."})
    }
});

module.exports = recipesRouter;