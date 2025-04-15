import { combineReducers } from '@reduxjs/toolkit';
import salesReducer from '../slices/sales';
import aiReducer from '../slices/ai';

const rootReducer = combineReducers({
  sales: salesReducer,
  ai: aiReducer,
});

export default rootReducer;