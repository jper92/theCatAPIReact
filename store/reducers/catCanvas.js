import { createSlice } from '@reduxjs/toolkit';
import { findCatIndexById, getCatId } from 'lib/catUtils';

const initialState = [];

const catCanvasSlice = createSlice({
  name: 'catCanvas',
  initialState,
  reducers: {
    addCat(state, action) {
      state.push(action.payload);
    },

    updateCat(state, action) {
      const cat = action.payload;
      const catId = getCatId(cat);
      const catIndex = findCatIndexById(catId, state);
      if (catIndex > -1) {
        state.splice(catIndex, 1, cat);
      }
    },
  },
});

export const { addCat, updateCat } = catCanvasSlice.actions;

export default catCanvasSlice.reducer;
