import NavDrawer from '@/components/NavDrawer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <NavDrawer> <Component {...pageProps} /> </NavDrawer>
}
