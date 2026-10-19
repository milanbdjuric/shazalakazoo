import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Music from "./components/Music";
import Videos from "./components/Videos";
import Photos from "./components/Photos";
import Shows from "./components/Shows";
import Press from "./components/Press";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { albums } from "./data/albums";
import { videos } from "./data/videos";
import { photos } from "./data/photos";
import { nextShow, pastShows } from "./data/shows";
import { pressLinks } from "./data/press";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Music albums={albums} />
        <Videos videos={videos} />
        <Photos photos={photos} />
        <Shows nextShow={nextShow} pastShows={pastShows} />
        <Press links={pressLinks} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
