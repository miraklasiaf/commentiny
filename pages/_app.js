import React from 'react'
import Head from 'next/head'
import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import Nprogress from '@/components/nprogress'
import theme from '@/design-system'
import DefaultLayout from '@/layouts/default'
import { AuthProvider } from '@/context/auth'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { MDXProvider } from '@mdx-js/react'
import MDX from '@/components/mdx'

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout children={page} />)

  return (
    <ChakraProvider resetCSS theme={theme} portalZIndex={40}>
      <AuthProvider>
        <MDXProvider components={MDX}>
          <DefaultSeo {...SEO} />
          <Nprogress />
          {getLayout(<Component {...pageProps} />)}
        </MDXProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
