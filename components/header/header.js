import { useEffect, useRef } from "react";
import NapoleonIcon from "../napoleonIcon/NapoleonIcon";
import styles from "./header.module.css";

const Header = ({ name, position }) => {
  const headerRef = useRef();
  const fixHeight = (event) => {
    headerRef.current.style.height = window.innerHeight + "px";
  };
  useEffect(() => {
    fixHeight();
  }, []);

  useEffect(() => {
    var afterOrientationChange = function () {
      fixHeight();
      // Remove the resize event listener after it has executed
      window.removeEventListener("resize", afterOrientationChange);
    };

    const oriantetionChangeHandler = () => {
      window.addEventListener("resize", afterOrientationChange);
    };

    window.addEventListener("orientationchange", oriantetionChangeHandler);

    return () => {
      window.removeEventListener("orientationchange", oriantetionChangeHandler);
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", fixHeight);

  //   return () => {
  //     window.removeEventListener("resize", fixHeight);
  //   };
  // }, []);

  return (
    <header ref={headerRef} className={styles.header}>
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
