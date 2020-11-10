
import { combineReducers } from 'redux';
import getCardsReducer from './dragCardReducer';

const rootReducer = combineReducers({
    cardsInfo: getCardsReducer
});


export default rootReducer;