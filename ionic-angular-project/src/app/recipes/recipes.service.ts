import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-1-1.jpg',
      ingredients: ['French Fries', 'Pork Meat'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://www.aheadofthyme.com/wp-content/uploads/2020/12/spaghetti-bolognese-4.jpg',
      ingredients: ['Ground beef', 'Onion', 'Garlic'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string | null) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId?: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
