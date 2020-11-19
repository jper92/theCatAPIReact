import { combineReducers } from '@reduxjs/toolkit';
import catList from './catList';
import selectedCats from './selectedCats';
import catCanvas from './catCanvas';

export default combineReducers({
  catList,
  selectedCats,
  catCanvas,
});
