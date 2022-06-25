import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import CommonLayout from '@components/layouts/CommonLayout'
import Script from 'next/script'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => <CommonLayout>{page}</CommonLayout>)
  return (
    getLayout(
      <>
        <Script
          strategy='afterInteractive'
          src='https://cdn.splitbee.io/sb.js'
        />
        <Component {...pageProps} />
      </>
    )
  )
}

export default App
