import type { PressLink } from "../types/content";
import SectionHeading from "./shared/SectionHeading";

interface PressProps {
  links: PressLink[];
}

export default function Press({ links }: PressProps) {
  return (
    <section id="press" className="content-section">
      <SectionHeading>Press</SectionHeading>
      {links.map((link) => (
        <h3 key={link.url}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
        </h3>
      ))}
    </section>
  );
}
