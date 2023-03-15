import store from "@/store"
import "@/styles/globals.css"
import GlobalStyle from "@/styles/globalStyles"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Provider store={store}>
        <SessionProvider session={session}>
          <GlobalStyle />
          <ToastContainer />
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </>
  )
}
