const express = require('express');

const db = require('../../data/helpers/dbModels');

const dishesRouter = express.Router();

dishesRouter.get('/', async (req, res, next) => {
    try {
        const dishes = await db.getDishes();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({error: "Error getting dishes."})
    }
});

dishesRouter.post('/', async (req, res) => {
    try {
        const dish = req.body;
        if (dish.name) {
          const [id] = await db.addDish(dish);
          res.status(201).json(id)
        } else {
          res.status(400).json({error: "Dish name is required."})
        }
    } catch (error) {
        res.status(500).json({error: "Error adding dish."})
    }
});

dishesRouter.get('/:id', async (req, res, next) => {
    try {
        const dish = await db.getDish(req.params.id)
        if (dish) {
          res.status(200).json(dish)
        } else {
          res.status(404).json({error: "Dish with specified ID does not exist."})
        }
    } catch (error) {
        res.status(500).json({error: "Error getting specified dish."})
    }
});

module.exports = dishesRouter;