import localFont from "next/font/local";
import { Noto_Sans } from "next/font/google";
import "../styles/globals.css";

const readexpro = localFont({
  src: "../lib/fonts/readexpro/readexpro.ttf",
  variable: "--font-readexpro",
});

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main
      className={`${readexpro.variable} ${noto_sans.variable} font-sans rtl:!font-multi-lingual`}
    >
      <Component {...pageProps} />
    </main>
  );
}
