import type { Show } from "../types/content";
import ShowRow from "./shows/ShowRow";
import SectionHeading from "./shared/SectionHeading";

interface ShowsProps {
  nextShow: Show;
  pastShows: Show[];
}

export default function Shows({ nextShow, pastShows }: ShowsProps) {
  return (
    <section id="shows" className="content-section">
      <SectionHeading>Shows</SectionHeading>
      <h3 className="shows-subheading">Next Show:</h3>
      <div className="shows-list shows-list-next">
        <ShowRow show={nextShow} />
      </div>
      <h3 className="shows-subheading past-shows-heading">Past Shows:</h3>
      <div className="shows-list">
        {pastShows.map((show, index) => (
          <ShowRow key={show.date + show.venue + index} show={show} />
        ))}
      </div>
    </section>
  );
}
