import { useCallback, useEffect, useState } from "react";

const RepoCard = ({
  name,
  updated_at,
  language,
  description,
  created_at,
  contents_url,
}) => {
  const [image, setImage] = useState();
  const fetchImageUrl = useCallback(async () => {
    let resp, data;
    try {
      resp = await fetch(contents_url.replace("{+path}", "preview.jpg"));
      data = await resp.json();
      setImage(data.download_url);
    } catch (e) {
      setImage();
    }
  }, [contents_url]);

  useEffect(() => {
    fetchImageUrl();
  }, [fetchImageUrl]);

  return (
    <div>
      <h2>{name}</h2>
      <h3>{language}</h3>
      {image && <img src={image} alt={name} width="20%" />}
      <p>{description}</p>
      <h5>Creation: {created_at}</h5>
    </div>
  );
};

export default RepoCard;
