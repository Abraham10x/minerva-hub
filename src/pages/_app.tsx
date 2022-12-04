import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("preline");
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}
