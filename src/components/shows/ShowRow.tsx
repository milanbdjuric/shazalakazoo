import type { Show } from "../../types/content";

const countryCodes: Record<string, string> = {
  ITALY: "it",
  FRANCE: "fr",
  GERMANY: "de",
  SWITZERLAND: "ch",
  POLAND: "pl",
  HUNGARY: "hu",
  SERBIA: "rs",
  UK: "gb",
  CROATIA: "hr",
  SWEDEN: "se",
  AUSTRIA: "at",
  DENMARK: "dk",
  BULGARIA: "bg",
  "BOSNIA AND HERZEGOVINA": "ba",
  ISRAEL: "il",
  ESTONIA: "ee",
  SPAIN: "es",
  LITHUANIA: "lt",
  LATVIA: "lv",
  ROMANIA: "ro",
  SLOVENIA: "si",
  BELGIUM: "be",
  PORTUGAL: "pt",
  NETHERLANDS: "nl",
  MOLDOVA: "md",
  MACEDONIA: "mk",
  "CZECH REPUBLIC": "cz",
  IRELAND: "ie",
  FINLAND: "fi",
  "SOUTH AFRICA": "za",
  RUSSIA: "ru",
  SLOVAKIA: "sk",
  MONTENEGRO: "me",
  NORWAY: "no",
  BELARUS: "by",
};

interface ShowRowProps {
  show: Show;
}

function CountryFlag({ country }: { country: string }) {
  const code = countryCodes[country];

  if (!code) {
    return <span className="show-flag" role="img" aria-label={country || "International show"}>🌍</span>;
  }

  return (
    <span className="show-flag" role="img" aria-label={country || "International show"}>
      <img
        src={"https://flagcdn.com/w40/" + code + ".png"}
        alt=""
        width="28"
        height="20"
        loading="lazy"
      />
    </span>
  );
}

export default function ShowRow({ show }: ShowRowProps) {
  return (
    <div className="show-row">
      <CountryFlag country={show.country} />
      <span className="show-details">
        <span className="show-date">{show.date}</span>
        <span className="show-venue-name">{show.venue}</span>
        <span className="show-location">
          <span className="show-town">{show.town}</span>
          <span className="show-country">{show.country}</span>
        </span>
      </span>
    </div>
  );
}
