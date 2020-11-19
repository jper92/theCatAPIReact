import { getCatId } from 'lib/catUtils';
import { useSelector } from 'react-redux';
import { catsForCanvasSelector } from 'store/selectors/catCanvas';
import CatOption from './CatOption';

const CatOptions = ({ onDragStart }) => {
  const selectedCats = useSelector(catsForCanvasSelector);
  return selectedCats.map((cat) => (
    <CatOption key={getCatId(cat)} cat={cat} onDragStart={() => onDragStart(cat)} />
  ));
};

export default CatOptions;
