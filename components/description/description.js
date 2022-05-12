import styles from "./description.module.css";

const Description = () => {
  return (
    <div className={styles.abstract}>
      <p className={styles.abstractMessage}>
        Hello, I am a frontend developer with more than 10 years of experience.
        I am focused on the development of Web application using the most recent
        tecnologies and following the best practices. I like web because it is
        open and free and I still believe it will be the future even in a time
        where smartphone and mobile apps ruled the world (the same world where
        Web tecnhologies have been used to develop mobile, desktop and server
        applications). <br />I also have a lot of interests around the dev world
        like web accessibility, IoT and embedded development, IT security and
        cryptography, image editing and 3D graphics.
      </p>
    </div>
  );
};

export default Description;
