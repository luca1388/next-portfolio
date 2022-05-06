import styles from "./RepoCard.module.css";

const RepoCard = ({
  name,
  updated_at,
  language,
  description,
  created_at,
  preview,
}) => {
  return (
    <div className={styles.RepoCard}>
      <h2>{name}</h2>
      {/* <h3>{language}</h3> */}
      {preview && <img src={preview} alt={name} width="100%" />}
      <p className={styles.description}>
        {description} (<b>{language}</b>)
      </p>
      <h5>{new Date(created_at).toLocaleDateString()}</h5>
    </div>
  );
};

export default RepoCard;
