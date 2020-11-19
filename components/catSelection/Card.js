import styles from './Card.module.css';

const Card = ({ onClick, children }) => (
  <button
    type="button"
    className={styles.card}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Card;
