import { getCatId } from 'lib/catUtils';
import { createSelector } from 'reselect';
import { selectedCatsSelector } from './selectedCats';

export const catCanvasSelector = (state) => state.catCanvas;

export const catsForCanvasSelector = createSelector(
  catCanvasSelector,
  selectedCatsSelector,
  (catCanvas, selectedCats) => {
    const catCanvasIds = catCanvas.map(getCatId);
    return selectedCats.filter((cat) => catCanvasIds.indexOf(getCatId(cat)) === -1);
  },
);
