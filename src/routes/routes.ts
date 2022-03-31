import { Router } from 'express';
import { FoodController } from '../controllers/foodController';
const router = Router();

router.get('/v1/foods', (req, res) => res.json(FoodController.getFoodList()))

router.get('/v1/foods/:foodId', (req, res) => FoodController.getFoodById(req, res))

router.get('/v1/category', (req, res) => res.json(FoodController.getCategoryList()))

router.get('/v1/category/:categoryId', (req, res) => FoodController.getCategoryById(req, res))

export { router };
