export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

// Action creator
export function setRecipes(items) {
  return {
    type: SET_RECIPES,
    items
  };
}

// Action creator
export function favoriteRecipe(recipe) {
  return {
    type: FAVORITE_RECIPE,
    // ES6 destructuring for recipe: recipe
    recipe
  };
}
