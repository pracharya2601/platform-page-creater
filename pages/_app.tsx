import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Suspense } from 'react';
import { Provider } from 'react-redux';

import {wrapper} from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Suspense fallback={<>Loading...</>}>
        <Component {...pageProps} />
      </Suspense>
  )
}

export default wrapper.withRedux(MyApp);
