import CommonQuestions from "./components/CommonQuestions";
import Competetion from "./components/Competetion";
import Hero from "./components/Hero";
import Opinions from "./components/Opinions";
import RegistrationSteps from "./components/RegistrationSteps";
import Videos from "./components/Videos";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Competetion />
      <WhyUs />
      <RegistrationSteps />
      <Opinions />
      <CommonQuestions />
      <Videos />
    </>
  );
}
