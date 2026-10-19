import type { Video } from "../types/content";
import VideoCard from "./media/VideoCard";

interface VideosProps {
  videos: Video[];
}

export default function Videos({ videos }: VideosProps) {
  return (
    <section id="videos" className="content-section">
      <h2>Videos</h2>
      <div className="video-grid">
        {videos.map((video) => <VideoCard key={video.videoId} video={video} />)}
      </div>
    </section>
  );
}
