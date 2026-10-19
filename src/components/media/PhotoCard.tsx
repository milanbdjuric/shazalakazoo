import type { Photo } from "../../types/content";

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  const imageSrc = import.meta.env.BASE_URL + photo.src.replace(/^\.\//, "");

  return (
    <figure>
      <img loading="lazy" src={imageSrc} alt={photo.alt} />
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}
