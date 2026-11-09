import type { Album } from "../../types/content";

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  const playlistUrl = "https://api.soundcloud.com/playlists/" + album.playlistId;
  const playerUrl =
    "https://w.soundcloud.com/player/?url=" +
    encodeURIComponent(playlistUrl) +
    "&color=%238A14FF&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true";

  return (
    <article className="album">
      <h3>{album.title}</h3>
      <p className="album-type">{album.type}</p>
      <iframe
        title={album.title + " — SoundCloud playlist — album artwork"}
        className="album-art-player"
        allow="autoplay"
        loading="lazy"
        scrolling="no"
        src={playerUrl}
      />
    </article>
  );
}
