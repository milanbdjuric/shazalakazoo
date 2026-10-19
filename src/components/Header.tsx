import {useState, type MouseEvent} from "react";
import Wordmark from "./Wordmark";

const navItems = [["Home", "#home"], ["About", "#about"], ["Music", "#music"], ["Videos", "#videos"], ["Photos", "#photos"], ["Shows", "#shows"], ["Press", "#press"], ["Contact", "#contact"]] as const;

async function waitForImage(image: HTMLImageElement): Promise<void> {
  if (!image.complete) {
    await new Promise<void>(resolve => {
      image.addEventListener("load", () => resolve(), {once: true});
      image.addEventListener("error", () => resolve(), {once: true});
    });
  }

  if (image.naturalWidth && typeof image.decode === "function") {
    await image.decode().catch(() => undefined);
  }
}

export default function Header() {
  const [open, setOpen] = useState(false);

  async function handleNavigation(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = event.currentTarget;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) {
      setOpen(false);
      return;
    }

    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) {
      setOpen(false);
      return;
    }

    event.preventDefault();
    setOpen(false);

    if (window.location.hash !== url.hash) {
      window.history.pushState(null, "", url.hash);
    }

    // Photo dimensions are intrinsic and can change the position of sections below
    // Photos while lazy images load. Load and decode them before calculating the scroll.
    if (["shows", "press", "contact"].includes(target.id)) {
      const photos = Array.from(document.querySelectorAll<HTMLImageElement>("#photos img"));
      photos.forEach(image => {
        image.loading = "eager";
      });
      await Promise.all(photos.map(waitForImage));
    }

    target.scrollIntoView({behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start"});
  }

  return <header className="site-header">
    <a className="wordmark" href="#home" aria-label="ShazaLaKazoo" onClick={handleNavigation}><img className="header-logo" src={import.meta.env.BASE_URL + "images/cropped-banner2-1.jpg"} alt="" aria-hidden="true" /><Wordmark className="wordmark-text" /><img className="header-logo" src={import.meta.env.BASE_URL + "images/cropped-banner2-1.jpg"} alt="" aria-hidden="true" /></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" aria-label="Toggle navigation" onClick={() => setOpen(value => !value)}><span /><span /><span /></button>
    <nav id="main-nav" className={"main-nav" + (open ? " is-open" : "")} aria-label="Main navigation">{navItems.map(([label, hash]) => <a key={hash} href={hash} onClick={handleNavigation}>{label}</a>)}</nav>
  </header>;
}
