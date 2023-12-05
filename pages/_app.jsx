import localFont from "next/font/local";
import { Noto_Naskh_Arabic } from "next/font/google";
import "../styles/globals.css";

const readexpro = localFont({
  src: "../lib/fonts/readexpro/readexpro.ttf",
  variable: "--font-readexpro",
});

const noto_naskh_sans = Noto_Naskh_Arabic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-naskh-sans",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main
      className={`${readexpro.variable} ${noto_naskh_sans.variable} font-sans rtl:!font-multi-lingual`}
    >
      <Component {...pageProps} />
    </main>
  );
}
