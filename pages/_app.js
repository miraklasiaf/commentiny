import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import Nprogress from '@/components/nprogress';
import theme from '@/components/design-system';
import DefaultLayout from '@/layouts/default';
import { AuthProvider } from '@/context/auth';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const App = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout children={page} />);

  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <DefaultSeo {...SEO} />
        <CSSReset />
        <Nprogress />
        {getLayout(<Component {...pageProps} />)}
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
