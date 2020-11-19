import { useDispatch, useSelector } from 'react-redux';
import { unselectCat } from 'store/reducers/selectedCats';
import { selectedCatsSelector } from 'store/selectors/selectedCats';
import CatCard from './CatCard';
import styles from './CatSelection.module.css';

const CatSelection = () => {
  const selectedCats = useSelector(selectedCatsSelector);
  const dispatch = useDispatch();

  const onCardClick = (cat) => dispatch(unselectCat(cat));

  return (
    <>
      <h3 className={styles.selectionTitle}>Selected cats</h3>
      {selectedCats.map((cat) => (
        <CatCard key={cat.id} cat={cat} onClick={() => onCardClick(cat)} />
      ))}
    </>
  );
};

export default CatSelection;
