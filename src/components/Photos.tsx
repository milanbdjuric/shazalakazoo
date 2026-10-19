import type { Photo } from "../types/content";
import PhotoCard from "./media/PhotoCard";

interface PhotosProps {
  photos: Photo[];
}

export default function Photos({ photos }: PhotosProps) {
  return (
    <section id="photos" className="content-section">
      <h2>Photos</h2>
      <div className="photo-grid">
        {photos.map((photo) => <PhotoCard key={photo.src} photo={photo} />)}
      </div>
    </section>
  );
}
