import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecipesPage } from './recipes/recipes.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./recipes/recipes.module').then(
            (module) => module.RecipesPageModule
          ),
      },
      {
        path: ':recipeId',
        loadChildren: () =>
          import('./recipes/recipe-detail/recipe-detail.module').then(
            (module) => module.RecipeDetailPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
