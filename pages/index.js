import Head from "next/head";
import Description from "../components/description/description";
import Header from "../components/header/header";
import RepoCard from "../components/RepoCard/RepoCard";
import styles from "../styles/Home.module.css";

export default function Home({ repos }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luca Gandini Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header name="Luca Gandini" position="Front end engineer" />
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
          <Description />
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
              <div className={styles.skillNumber}>2</div>
              <div className={styles.skillName}>Live websites</div>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillNumber}>3</div>
              <div className={styles.skillName}>Active Telegram Bots</div>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillNumber}>2</div>
              <div className={styles.skillName}>Pets</div>
            </div>
          </div>
        </section>
        <section className={styles.repositories}>
          {repos.map((repository) => (
            <RepoCard
              key={repository.id}
              name={repository.name}
              description={repository.description}
              language={repository.language}
              created_at={repository.created_at}
              preview={repository.download_url}
              repositoryUrl={repository.html_url}
              demoUrl={repository.homepage}
              isNpmPackage={npmPackageReposName.indexOf(repository.name) > -1}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

const excludeReposName = [
  "portfolio",
  "next-portfolio",
  "memoryJS",
  "customer-website",
  "WebpackPostBuildScriptPlugin",
  "gatsby-landing-page-demo",
];

const npmPackageReposName = [
  "create-express-react-app",
  "propertiesToJSON",
  "obj-functions",
];

export async function getStaticProps() {
  const response = await fetch("https://api.github.com/users/luca1388/repos", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  let repos = await response.json();

  repos = repos.filter((repo) => excludeReposName.indexOf(repo.name) < 0);

  for (let repo of repos) {
    let resp = await fetch(
      repo.contents_url.replace("{+path}", "preview.jpg"),
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );
    let data = await resp.json();

    repo.download_url = data.download_url ?? null;
  }

  return {
    props: {
      repos,
    },
  };
}
