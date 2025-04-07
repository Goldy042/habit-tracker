import Image from "next/image";
import Header from "./component/header";
import Hero from "./component/hero";
import FeatureSection from "./component/feature";
import Guide from "./component/Guide";
import Testimonial from "./component/Testimonial";
import CallToAction from "./component/call";
import Footer from "./component/Footer";

export default function Home() {
  return (
   <div>
   <Header/>
   <Hero />
   <FeatureSection />
   <Guide />
   <Testimonial />
   <CallToAction />
   <Footer />

    </div>
  );
}
