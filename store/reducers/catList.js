import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import catsApi from 'api/ cats/catsApi';
import getCatName from 'lib/catNames';

const initialState = {
  cats: [],
  catsLoading: false,
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

export default catsSlice.reducer;
