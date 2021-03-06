import {
    FETCH_ALL_STOCKS,
    RECEIVE_STOCK
  } from '../actions/stock_actions';
import merge from 'lodash/merge'
  
  const stocksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch(action.type) {
      case FETCH_ALL_STOCKS:
        return  merge({}, newState, action.all_stocks);
      default:
        return state;
    }
  };

  
  
  export default stocksReducer;