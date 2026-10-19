import type { Video } from "../types/content";
import VideoCard from "./media/VideoCard";
import SectionHeading from "./shared/SectionHeading";

interface VideosProps {
  videos: Video[];
}

export default function Videos({ videos }: VideosProps) {
  return (
    <section id="videos" className="content-section">
      <SectionHeading>Videos</SectionHeading>
      <div className="video-grid">
        {videos.map((video) => <VideoCard key={video.videoId} video={video} />)}
      </div>
    </section>
  );
}
