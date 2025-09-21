import Hero from "../../homepage/hero";
import Steps from "../../homepage/steps";
import Features from "../../homepage/features";
import LiveRate from "../../homepage/live-rate";
import USDTForm from "../../homepage/usdt-form";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Steps />
      <Features />
      <LiveRate />
      <section id="start-transaction">
        <USDTForm />
      </section>
    </>
  );
}
