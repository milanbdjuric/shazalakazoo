import { useState } from "react";
import type { Video } from "../../types/content";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="video">
      <h3>{video.title}</h3>
      <div className="video-frame">
        {loaded ? (
          <iframe
            src={"https://www.youtube-nocookie.com/embed/" + video.videoId}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            className="video-load-button"
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={"Load video: " + video.title}
          >
            <span className="video-play-icon" aria-hidden="true">▶</span>
            <span>LOAD VIDEO</span>
          </button>
        )}
      </div>
    </article>
  );
}
