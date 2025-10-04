import Hero from "../../homepage/hero";
import Steps from "../../homepage/steps";
import Features from "../../homepage/features";
import LiveRate from "../../homepage/live-rate";
import Faqs from "../../homepage/faqs";
import Footer from "../../homepage/footer";
import StartTransaction from "../../homepage/start-transaction";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Steps />
      <Features />
      <LiveRate />
      <section id="start-transaction">
        <StartTransaction />
      </section>
      <Faqs />
      <Footer />
    </>
  );
}
