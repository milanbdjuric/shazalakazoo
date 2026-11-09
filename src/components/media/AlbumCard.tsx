import { useState } from "react";
import type { Album } from "../../types/content";

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  const [loaded, setLoaded] = useState(false);
  const playlistUrl = "https://api.soundcloud.com/playlists/" + album.playlistId;
  const playerUrl =
    "https://w.soundcloud.com/player/?url=" +
    encodeURIComponent(playlistUrl) +
    "&color=%238A14FF&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true";

  return (
    <article className="album">
      <h3>{album.title}</h3>
      <p className="album-type">{album.type}</p>
      {loaded ? (
        <iframe
          title={album.title + " — SoundCloud playlist — album artwork"}
          className="album-art-player"
          allow="autoplay"
          scrolling="no"
          src={playerUrl}
        />
      ) : (
        <div className="album-art-placeholder">
          <button
            className="soundcloud-load-button"
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={"Load SoundCloud player for " + album.title}
          >
            <span className="soundcloud-load-icon" aria-hidden="true">▶</span>
            <span>LOAD ALBUM PLAYER</span>
          </button>
        </div>
      )}
    </article>
  );
}
