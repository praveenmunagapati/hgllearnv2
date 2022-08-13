import Head from "next/head";
import Layout from "../HOC/Layout/Layout";
// import styles from "../styles/Home.module.css";
import Home from "./HomePage/index";
export default function Index() {
  return (
    <Layout>
      <div className={ `` }>
        {/* <div> */ }
        <Head>
          <title>HUB IT GROUP PVT LTD. - We provide best IT Training,Solution,Digital Marketing ,Hardware/Networking</title>
          <meta name="description" content="HUB IT is recognized as one of Nepal’s best skill development and IT training centers. The journey of HUB IT started in 2017 with a big dream to bring applied education to the mass population at an affordable cost. The main purpose of HUB IT is to facilitate, with the best IT-related skills.
Being the best IT training institute in Nepal, HUB IT is determined to combine education and job creation that forms a unique ecosystem. Here people are connected globally with a purpose and mutual benefit. The courses provided by HUB IT will help in education and job creation on a global scale. Here everyone gets the same opportunity to leverage our services to learn the skills necessary for making a living in the digital workplace.
" />
<meta name="keywords" content=""/>
          <link rel="icon" href="/hubitLogo.svg" />
          <meta name="msvalidate.01" content="DCD5FD5B8698F83AE6AC76EE889570AC" />
        </Head>
        <main>
          <Home />
          
        </main>

      </div>
    </Layout>
  );
}
