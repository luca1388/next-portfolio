import NapoleonIcon from "../napoleonIcon/NapoleonIcon";
import styles from "./header.module.css";

const Header = ({ name, position }) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <NapoleonIcon />
      </div>
      <div className={styles.circle}></div>
      <div className={styles.intro}>{/* <h1>Welcome to the jungle</h1> */}</div>
      <div className={styles.name}>
        <h1>{name}</h1>
        <h5>{position}</h5>
      </div>
      <div className={styles.rightHeader}></div>
    </header>
  );
};
export default Header;
