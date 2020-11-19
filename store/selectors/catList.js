import { getCatId } from 'lib/catUtils';
import { createSelector } from 'reselect';

const catListSelector = (state) => state.catList.cats;

const selectedCatsSelector = (state) => state.catList.selectedCats;

export const availableCatListSelector = createSelector(
  catListSelector,
  selectedCatsSelector,
  (catList, selectedCats) => {
    const selectedCatIds = selectedCats.map(getCatId);
    return catList.filter((cat) => selectedCatIds.indexOf(getCatId(cat)) === -1);
  },
);
