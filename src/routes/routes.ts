import { Router } from 'express';
import { FoodController } from '../controllers/foodController';
const router = Router();

router.get('/v1/', (req, res) => {
    res.send('Hello ');
});

router.get('/v1/foods', (req, res) => {
    res.json(FoodController.getFoodList());
});

router.get('/v1/foods/:foodId', (req, res) =>
    FoodController.getFoodById(req, res),
);
export { router };
