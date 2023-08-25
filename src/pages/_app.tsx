import "./styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={inter.className}>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
