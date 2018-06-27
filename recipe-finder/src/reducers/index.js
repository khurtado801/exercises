import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE } from '../actions';

/**
 * Root reducer
 * Define recipes reducer
 */
function recipes(state = [], action) {
    switch (action.type) {
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

// Define favoriteRecipes reducer
function favoriteRecipes(state = [], action) {
    switch (action.type) {
       case FAVORITE_RECIPE:
    //    Set state equal to an array and spread out its original state
         state = [...state, action.recipe];
         return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default rootReducer;
