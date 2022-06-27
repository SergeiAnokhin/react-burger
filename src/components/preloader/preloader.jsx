import styles from './preloader.module.css';

export const Preloader = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
        
  );
};