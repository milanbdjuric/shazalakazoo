import type { Album } from "../types/content";
import AlbumCard from "./media/AlbumCard";

interface MusicProps {
  albums: Album[];
}

export default function Music({ albums }: MusicProps) {
  return (
    <section id="music" className="content-section">
      <h2>Music</h2>
      <div className="album-grid">
        {albums.map((album) => <AlbumCard key={album.playlistId} album={album} />)}
      </div>
    </section>
  );
}
