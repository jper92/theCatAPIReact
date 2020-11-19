import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBreeds, fetchCats } from 'store/modules/catList';

const useBreeds = (dispatch) => {
  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);
  const { breeds } = useSelector((state) => state.catList);
  return [breeds];
};

const useDebouncedSearch = (dispatch) => {
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    dispatch(fetchCats({ breedId: searchTerm, page: 1, limit: 10 }));
  }, [searchTerm]);

  return [searchTerm, setSearchTerm];
};

const CatFinder = () => {
  const dispatch = useDispatch();
  const [breeds] = useBreeds(dispatch);
  const [searchTerm, setSearchTerm] = useDebouncedSearch(dispatch);

  return (
    <select
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    >
      {breeds.map((breed) => (
        <option key={breed.id} value={breed.id}>{breed.name}</option>
      ))}
    </select>
  );
};

export default CatFinder;
