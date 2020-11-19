import CatFinder from './catSelection/CatFinder';
import CatResults from './catSelection/CatResults';
import CatSelection from './catSelection/CatSelection';
import styles from './Step.module.css';

const SelectStep = ({ onNext }) => (
  <>
    <aside className={styles.sidebar}>
      <CatSelection />
    </aside>
    <div className={styles.content}>
      <h1 className={styles.title}>
        Cat collage creator
      </h1>
      <p>1. Select a cat breed</p>
      <p>2. Select the cats your with to use in the canvas</p>
      <p>3. When finished press &quot;Use selected&quot; button to go to the canvas</p>
      <CatFinder />

      <button className={styles.button} type="button" onClick={onNext}>Use selected</button>
      <div className={styles.grid}>
        <CatResults />
      </div>
    </div>
  </>
);

export default SelectStep;
