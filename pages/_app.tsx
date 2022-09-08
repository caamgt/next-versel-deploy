import { ReactElement, ReactNode } from 'react';
import { AppProps } from '../node_modules/next/app';
import '../styles/globals.css';
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  // return <Component {...pageProps} />;
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
