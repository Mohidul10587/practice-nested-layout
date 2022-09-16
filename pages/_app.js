import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout >
   <div className='min-h-screen'>
   <Component {...pageProps} />
   </div>
  </Layout>
}

export default MyApp
