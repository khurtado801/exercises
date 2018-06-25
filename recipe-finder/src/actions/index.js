export const SET_RECIPES = 'SET_RECIPES';

// Action creator
export function setRecipes(items) {
  return {
    type: SET_RECIPES,
    items
  };
}
