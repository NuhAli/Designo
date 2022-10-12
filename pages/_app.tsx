import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Sidebar } from "../components/Sidebar";
import { RemoveScroll } from "react-remove-scroll";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [click, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!click);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <>
      <RemoveScroll enabled={click}>
        <NavBar click={click} handleClick={handleClick} closeMenu={closeMenu} />
        {click && <Sidebar closeMenu={closeMenu} />}
        <Component {...pageProps} />
        <Footer />
      </RemoveScroll>
    </>
  );
}

export default MyApp;
