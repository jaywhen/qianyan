import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

import CommonLayout from '@components/layouts/CommonLayout'
import { EditorStoreProvider } from '@store/EditorContext'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => <CommonLayout>{page}</CommonLayout>)
  return (
    <EditorStoreProvider>
      {getLayout(
        <Component {...pageProps} />
      )}
    </EditorStoreProvider>
  )
}

export default MyApp
