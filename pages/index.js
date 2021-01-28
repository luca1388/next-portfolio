import Head from "next/head";
import Header from "../components/header/header";
import RepoCard from "../components/RepoCard/RepoCard";
import styles from "../styles/Home.module.css";

export default function Home({ repos }) {
  console.log(repos);
  return (
    <div className={styles.container}>
      <Head>
        <title>Luca Gandini Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header name="Luca Gandini" position="Front end developer" />
        <section className={styles.about}>
          <div className={styles.contacts}>
            <h2 className={styles.aboutMe}>About me</h2>
            <ul className={styles.social}>
              <li className={styles.listItem}>
                <a
                  href="https://www.linkedin.com/in/luca-gandini/"
                  target="_blank"
                  rel="noopener"
                  title="Linkedin account"
                >
                  <img
                    width="28px"
                    height="28px"
                    src="/linkedin.svg"
                    title="Linkedin account"
                  />
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  href="https://twitter.com/luca1388"
                  target="_blank"
                  rel="noopener"
                  title="Twitter account"
                >
                  <img
                    width="28px"
                    height="28px"
                    src="/twitter.svg"
                    title="Twitter account"
                  />
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  href="https://github.com/luca1388"
                  target="_blank"
                  rel="noopener"
                  title="Github account"
                >
                  <img
                    width="28px"
                    height="28px"
                    src="/github.svg"
                    title="Github account"
                  />
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  href="https://unsplash.com/@luca1388"
                  target="_blank"
                  rel="noopener"
                  title="Unsplash account"
                >
                  <img
                    width="28px"
                    height="28px"
                    src="/unsplash.svg"
                    title="Unsplash account"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.abstract}>
            <p className={styles.abstractMessage}>
              Hello, I am a frontend developer... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
            </p>
          </div>
        </section>
        <section className={styles.counter}>
          <div className={styles.counterRow}>
            <div className={styles.skillCard}>
              <div className={styles.skillNumber}>
                {new Date().getFullYear() -
                  new Date("2012-11-27").getFullYear()}
              </div>
              <div className={styles.skillName}>Years Experience</div>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillNumber}>1</div>
              <div className={styles.skillName}>Years Experience</div>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillNumber}>1</div>
              <div className={styles.skillName}>Years Experience</div>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillNumber}>1</div>
              <div className={styles.skillName}>Years Experience</div>
            </div>
          </div>
        </section>
        <section>
          {repos.map((repository) => (
            <RepoCard
              key={repository.id}
              name={repository.name}
              description={repository.description}
              language={repository.language}
              created_at={repository.created_at}
              contents_url={repository.contents_url}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const response = await fetch("https://api.github.com/users/luca1388/repos");
  const repos = await response.json();

  return {
    props: {
      repos,
    },
  };
}
