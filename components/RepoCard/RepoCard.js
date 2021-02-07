const RepoCard = ({
  name,
  updated_at,
  language,
  description,
  created_at,
  preview,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{language}</h3>
      {preview && <img src={preview} alt={name} width="20%" />}
      <p>{description}</p>
      <h5>Creation: {created_at}</h5>
    </div>
  );
};

export default RepoCard;
