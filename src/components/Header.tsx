import {useState} from "react";
import Wordmark from "./Wordmark";
const navItems=[["Home","#home"],["About","#about"],["Music","#music"],["Videos","#videos"],["Photos","#photos"],["Shows","#shows"],["Press","#press"],["Contact","#contact"]] as const;
export default function Header(){
 const [open,setOpen]=useState(false);
 return <header className="site-header">
  <a className="wordmark" href="#home" aria-label="ShazaLaKazoo"><img className="header-logo" src={import.meta.env.BASE_URL+"images/cropped-banner2-1.jpg"} alt="" aria-hidden="true"/><Wordmark className="wordmark-text"/><img className="header-logo" src={import.meta.env.BASE_URL+"images/cropped-banner2-1.jpg"} alt="" aria-hidden="true"/></a>
  <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" aria-label="Toggle navigation" onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button>
  <nav id="main-nav" className={"main-nav"+(open?" is-open":"")} aria-label="Main navigation">{navItems.map(([label,hash])=><a key={hash} href={hash} onClick={()=>setOpen(false)}>{label}</a>)}</nav>
 </header>;
}