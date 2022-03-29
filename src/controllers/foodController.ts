import foodList from '../data/foodList.json';
import categoryList from '../data/categoryList.json';
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

    static getCategoryList(){
        return categoryList;
    }

    static getCategoryById(req: Request, res: Response){
        const { categoryId } = req.params

        const response = categoryList.filter( category => category.id.toString() === categoryId.toString())

        return res.json(response)
    }
}
