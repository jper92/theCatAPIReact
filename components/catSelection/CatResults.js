import { useDispatch, useSelector } from 'react-redux';
import { selectCat } from 'store/reducers/selectedCats';
import { availableCatListSelector } from 'store/selectors/catList';
import CatCard from './CatCard';
import styles from './CatResults.module.css';

const CatResults = () => {
  const { catsLoading } = useSelector((state) => state.catList);
  const cats = useSelector(availableCatListSelector);
  const dispatch = useDispatch();

  if (catsLoading) {
    return (
      <p className={styles.message}>
        Loading...
      </p>
    );
  }
  if (cats.length === 0) {
    return (
      <p className={styles.message}>
        No cats found for this breed :(
      </p>
    );
  }

  const onCatClick = (cat) => dispatch(selectCat(cat));

  return cats.map((cat) => (
    <CatCard key={cat.id} cat={cat} onClick={() => onCatClick(cat)} />
  ));
};

export default CatResults;
