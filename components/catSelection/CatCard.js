import Card from './Card';

const CatCard = ({ cat, onClick, ...props }) => (
  <Card onClick={onClick} {...props}>
    <img alt="cat result" src={cat.url} width={Math.min(cat.width, 100)} height={Math.min(cat.height, 100)} />
    <p>{cat.name}</p>
  </Card>
);

export default CatCard;
