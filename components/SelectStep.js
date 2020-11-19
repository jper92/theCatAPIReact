import CatFinder from './catSelection/CatFinder';
import CatResults from './catSelection/CatResults';
import CatSelection from './catSelection/CatSelection';
import styles from './SelectStep.module.css';

const SelectStep = ({ onNext }) => (
  <>
    <aside className={styles.sidebar}>
      <CatSelection />
    </aside>
    <div className={styles.content}>
      <h1 className={styles.title}>
        Cat collage creator
      </h1>
      <CatFinder />

      <button className={styles.button} type="button" onClick={onNext}>Use selected</button>
      <div className={styles.grid}>
        <CatResults />
      </div>
    </div>
  </>
);

export default SelectStep;
