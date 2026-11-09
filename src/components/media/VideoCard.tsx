import type { Video } from "../../types/content";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="video">
      <h3>{video.title}</h3>
      <div className="video-frame">
        <iframe
          loading="lazy"
          src={"https://www.youtube-nocookie.com/embed/" + video.videoId}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </article>
  );
}
