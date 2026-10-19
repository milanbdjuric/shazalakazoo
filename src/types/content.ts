export interface Album {
  title: string;
  type: string;
  playlistId: string;
}

export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

export interface Video {
  title: string;
  videoId: string;
}

export interface Show {
  date: string;
  venue: string;
  town: string;
  country: string;
}

export interface PressLink {
  url: string;
  label: string;
}
