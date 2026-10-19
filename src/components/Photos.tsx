import type { Photo } from "../types/content";
import PhotoCard from "./media/PhotoCard";
import SectionHeading from "./shared/SectionHeading";

interface PhotosProps {
  photos: Photo[];
}

export default function Photos({ photos }: PhotosProps) {
  return (
    <section id="photos" className="content-section">
      <SectionHeading>Photos</SectionHeading>
      <div className="photo-grid">
        {photos.map((photo) => <PhotoCard key={photo.src} photo={photo} />)}
      </div>
    </section>
  );
}
