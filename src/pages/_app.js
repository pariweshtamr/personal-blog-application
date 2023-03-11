import "@/styles/globals.css"
import GlobalStyle from "@/styles/globalStyles"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
