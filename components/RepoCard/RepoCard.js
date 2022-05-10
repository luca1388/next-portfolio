import styles from "./RepoCard.module.css";

const RepoCard = ({
  name,
  language,
  description,
  created_at,
  preview,
  isNpmPackage,
  repositoryUrl,
  demoUrl,
}) => {
  console.log(isNpmPackage);
  const imageURL = isNpmPackage ? "/npm.png" : preview;
  return (
    <div className={styles.RepoCard}>
      <h2>{name}</h2>
      {imageURL && (
        <img src={imageURL} alt={name} style={{ maxHeight: "180px" }} />
      )}
      <p className={styles.description}>
        {description} {language && <b>({language})</b>}
      </p>
      {demoUrl && (
        <button
          className={styles.button}
          onClick={() => window.open(demoUrl, "_blank")}
        >
          <span>View demo</span>
        </button>
      )}
      <a href={repositoryUrl} target="_blank" role="link">
        View repository
      </a>
      <h5>{new Date(created_at).toLocaleDateString()}</h5>
    </div>
  );
};

export default RepoCard;
