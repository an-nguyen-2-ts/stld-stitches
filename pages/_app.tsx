import type { AppProps } from 'next/app';

import stitchesGlobal from 'styles/stitches.global';
import { ThemeModeProvider } from 'src/contexts/themeMode';
import Header from 'src/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  stitchesGlobal();
  return (
    <ThemeModeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeModeProvider>
  );
}

export default MyApp;
