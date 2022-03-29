import foodList from '../data/foodList.json';
import { Request, Response } from 'express';

export class FoodController {
    static getFoodList() {
        return foodList;
    }

    static getFoodById(req: Request, res: Response) {
        const { foodId } = req.params;

        const response = foodList.filter((food) => {
            return food.id.toString() === foodId.toString();
        });
        return res.json(response);
    }
}
