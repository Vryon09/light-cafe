import { useEffect, useRef, useState } from "react";
import HiddenMenu from "../../components/Nav/HiddenMenu";
import Nav from "../../components/Nav/Nav";
import Hero from "./Hero";
import styles from "./Home.module.css";
import LocationNHours from "./LocationNHours";
import Menu from "./Menu";
import Socials from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(true);
  const menuSection = useRef(null);
  const locSection = useRef(null);
  const socialsSection = useRef(null);
  const topRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  function handleScroll() {
    setIsScrollTop(window.scrollY === 0);
  }

  function handleBackToTop() {
    if (topRef.current)
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    if (!isMenuOpen) document.body.style.overflow = "auto";
  }, [isMenuOpen]);

  return (
    <div className={styles.container}>
      <div ref={topRef}></div>
      <main className={styles.main}>
        <Nav
          setIsMenuOpen={setIsMenuOpen}
          menuSection={menuSection}
          locSection={locSection}
          socialsSection={socialsSection}
          scrollToRef={scrollToRef}
        />
        <div className={styles.sections}>
          <HiddenMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            menuSection={menuSection}
            locSection={locSection}
            socialsSection={socialsSection}
            scrollToRef={scrollToRef}
          />
          <Hero scrollToRef={scrollToRef} menuSection={menuSection} />
          <Menu menuSection={menuSection} />
          <div className={styles.lowerSections}>
            <LocationNHours locSection={locSection} />
            <Socials socialsSection={socialsSection} />
          </div>
          <Footer />
        </div>
      </main>
      {!isScrollTop && (
        <div className={styles.backToTop} onClick={handleBackToTop}>
          <FontAwesomeIcon
            icon={faChevronUp}
            size="3x"
            className={styles.icon}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
