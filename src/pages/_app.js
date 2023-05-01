import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <p>app Component  </p>
    <Component user="Ram" {...pageProps} />
  </>
}
