import type { Album } from "../types/content";
import AlbumCard from "./media/AlbumCard";
import SectionHeading from "./shared/SectionHeading";

interface MusicProps {
  albums: Album[];
}

export default function Music({ albums }: MusicProps) {
  return (
    <section id="music" className="content-section">
      <SectionHeading>Music</SectionHeading>
      <div className="album-grid">
        {albums.map((album) => <AlbumCard key={album.playlistId} album={album} />)}
      </div>
    </section>
  );
}
