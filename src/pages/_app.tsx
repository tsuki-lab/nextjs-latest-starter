import 'ress'
import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import { globalStyle } from '@/styles/global.style'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
