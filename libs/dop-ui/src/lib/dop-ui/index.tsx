import styles from './dop-ui.module.css';

/* eslint-disable-next-line */
export interface DopUiProps {}

export function DopUi(props: DopUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DopUi!</h1>
    </div>
  );
}

export default DopUi;
