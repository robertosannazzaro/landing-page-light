import Head from "next/head";
import Navbar from "../components/Navbar";
import SplashScreen from "../sections/SplashScreen";
import CallToAction from "../sections/CallToAction";
import Feature from "../sections/Feature";
import Stats from "../sections/Stats";
import Testimonials from "../sections/Testimonials";
import Pricing from "../sections/Pricing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="max-w mx-auto">
      <Head>
        <title>SuperMegaStartup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gradient-to-b from-white via-acquaGreen to-white">
          <Navbar />
          <SplashScreen />
        </div>
        <CallToAction />
        <Feature />
        <Stats />
        <Testimonials />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}
