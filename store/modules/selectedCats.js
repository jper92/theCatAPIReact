const { createSlice } = require('@reduxjs/toolkit');
const { getCatId, findCatIndexById } = require('lib/catUtils');

const initialState = [];

const selectedCatsSlice = createSlice({
  name: 'selectedCats',
  initialState,
  reducers: {
    selectCat: (state, action) => {
      const cat = action.payload;
      const catId = getCatId(cat);
      if (findCatIndexById(catId, state) === -1) {
        state.push(cat);
      }
    },
    unselectCat: (state, action) => {
      const cat = action.payload;
      const catId = getCatId(cat);
      const indexToRemove = findCatIndexById(catId, state);
      if (indexToRemove > -1) {
        state.splice(indexToRemove, 1);
      }
    },
  },
});

export const { selectCat, unselectCat } = selectedCatsSlice.actions;

export default selectedCatsSlice.reducer;
