import { getCatId } from 'lib/catUtils';
import { createSelector } from 'reselect';
import { selectedCatsSelector } from './selectedCats';

export const catListSelector = (state) => state.catList.cats;

export const availableCatListSelector = createSelector(
  catListSelector,
  selectedCatsSelector,
  (catList, selectedCats) => {
    const selectedCatIds = selectedCats.map(getCatId);
    return catList.filter((cat) => selectedCatIds.indexOf(getCatId(cat)) === -1);
  },
);
