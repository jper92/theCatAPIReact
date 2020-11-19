import { useState } from 'react';
import Head from 'next/head';
import SelectStep from 'components/SelectStep';
import CanvasStep from 'components/CanvasStep';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const onNextStep = () => setCurrentStep(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cats collage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {currentStep === 0
          ? <SelectStep onNext={onNextStep} />
          : <CanvasStep />}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
