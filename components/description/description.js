import styles from "./description.module.css";

const Description = () => {
  return (
    <div className={styles.abstract}>
      <p className={styles.abstractMessage}>
        Hello, I am a frontend developer with more than 10 years of experience.
        I am focused on the development of Web applications using the most
        recent tecnologies and following the best practices. I like the Web
        because it is open and free and I still believe it will be the future
        even in a time when smartphones and mobile apps rule the world. <br />I
        also have a lot of interests around the dev world like web
        accessibility, IoT and embedded development, IT security and
        cryptography, image editing and 3D graphics.
      </p>
    </div>
  );
};

export default Description;
