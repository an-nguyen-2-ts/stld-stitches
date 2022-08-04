import type { AppProps } from 'next/app';
import stitchesGlobal from '../styles/stitches.global';

function MyApp({ Component, pageProps }: AppProps) {
  stitchesGlobal();
  return <Component {...pageProps} />;
}

export default MyApp;
