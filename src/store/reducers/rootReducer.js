import  { combineReducers } from 'redux';

// Listing Reducers
import catReducer from './CatReducer';
import breedReducer from './BreedReducer';
import categoryReducer from './CategoryReducer';

export default combineReducers({

    cats: catReducer,

    breeds: breedReducer,

    categories: categoryReducer

});