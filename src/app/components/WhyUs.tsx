import Image from "next/image";
import Container from "./Container";
import MainTiltle from "./ui/MainTiltle";
import WhyCard from "./ui/WhyCard";
import { whyUsCardData } from "../data/why-us";

const WhyUs = () => {
  return (
    <Container className="sec-padding">
      <MainTiltle>
        لماذا مسابقة <span>PRIME WINNER</span>
      </MainTiltle>
      <div className="md:grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {whyUsCardData.map((card, idx) => (
            <WhyCard key={idx} {...card} />
          ))}
        </div>

        {/* image */}
        <div className="col-span-1">
          <Image
            src={"/images/why-us.webp"}
            alt="phone"
            width={320}
            height={320}
            className="mx-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default WhyUs;
