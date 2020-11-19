import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import catsApi from 'api/ cats/catsApi';
import getCatName from 'lib/catNames';
import { findCatIndexById, getCatId } from 'lib/catUtils';

const initialState = {
  cats: [],
  catsLoading: false,
  selectedCats: [],
  breeds: [],
  breedsLoading: false,
};

const fetchCats = createAsyncThunk(
  'catList/fetch',
  async ({
    breedId, page, limit, order,
  }) => {
    const response = await catsApi.getCatList({
      breedId, page, limit, order,
    });
    return response;
  },
);

const fetchBreeds = createAsyncThunk(
  'breedList/fetch',
  async () => {
    const response = await catsApi.getBreedList();
    return response;
  },
);

const catsSlice = createSlice({
  name: 'catList',
  initialState,
  reducers: {
    selectCat: (state, action) => {
      const cat = action.payload;
      const catId = getCatId(cat);
      const { selectedCats } = state;
      if (findCatIndexById(catId, selectedCats) === -1) {
        state.selectedCats.push(cat);
      }
    },
    unselectCat: (state, action) => {
      const cat = action.payload;
      const catId = getCatId(cat);
      const { selectedCats } = state;
      const indexToRemove = findCatIndexById(catId, selectedCats);
      if (indexToRemove > -1) {
        state.selectedCats.splice(indexToRemove, 1);
      }
    },
  },
  extraReducers: {
    [fetchCats.pending]: (state) => {
      state.catsLoading = true;
    },
    [fetchCats.rejected]: (state) => {
      state.catsLoading = false;
    },
    [fetchCats.fulfilled]: (state, action) => {
      state.cats = action.payload.map((cat) => ({
        ...cat,
        name: getCatName(),
      }));
      state.catsLoading = false;
    },
    [fetchBreeds.pending]: (state) => {
      state.breedsLoading = true;
    },
    [fetchBreeds.rejected]: (state) => {
      state.breedsLoading = false;
    },
    [fetchBreeds.fulfilled]: (state, action) => {
      state.breeds = action.payload;
      state.breedsLoading = false;
    },
  },
});

export { fetchCats, fetchBreeds };
export const { selectCat, unselectCat } = catsSlice.actions;

export default catsSlice.reducer;
