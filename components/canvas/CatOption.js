import Card from 'components/catSelection/Card';
import CatCard from 'components/catSelection/CatCard';

const CatOption = ({ cat, onDragStart }) => (
  <CatCard cat={cat} draggable="true" onDragStart={onDragStart} />
);

export default CatOption;
