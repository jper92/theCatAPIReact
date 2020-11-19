export function getCatId(cat) {
  return cat.id;
}

export function findCatIndexById(idToFind, catList) {
  return catList.findIndex(({ id }) => id === idToFind);
}
