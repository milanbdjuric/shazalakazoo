import type { Show } from "../types/content";
import ShowRow from "./shows/ShowRow";

interface ShowsProps {
  nextShows: Show[];
  pastShows: Show[];
}

export default function Shows({ nextShows, pastShows }: ShowsProps) {
  return (
    <section id="shows" className="content-section">
      <h2>Shows</h2>
      {/* <h3 className="shows-subheading">Next Shows:</h3> */}
      {/* <div className="shows-list shows-list-next"> */}
      {/*   <ShowRow show={nextShows} /> */}
      {/* </div> */}
      {/* <h3 className="shows-subheading past-shows-heading">Past Shows:</h3> */}
      <div className="shows-list">
        {pastShows.map((show, index) => (
          <ShowRow key={show.date + show.venue + index} show={show} />
        ))}
      </div>
    </section>
  );
}
