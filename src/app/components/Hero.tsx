import Image from "next/image";
import Container from "./Container";
import Button from "./ui/Button";
import { IoIosArrowDropleft } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero-sec sec-padding min-h-screen">
      <Container>
        <div className="mt-10 lg:mt-24">
          <div className="md:grid grid-cols-2 items-center">
            <div>
              <h1 className="text-main-yellow text-3xl md:text-[40px] lg:text-[58px]">
                PRIME WINNER <br /> CONTEST
              </h1>
              <p className="my-5 text-white/80 max-md:text-sm">
                المسابقة مقدمة من APC PRIME وتهدف لتطوير مهارتك وزيادة خبرتك
                بالتداول . وتعتبر فرصة مثالية لعيش مغامرة مثيرة ومنافسة شديدة
                على المراكز الأولى للحصول على جوائز قيمة.
              </p>
              <Button className="bg-main-yellow flex items-center gap-1">
                سجل الأن{" "}
                <span>
                  <IoIosArrowDropleft size={20} className="mt-0.5" />
                </span>
              </Button>
            </div>

            <div>
              <Image
                src={"/images/hero-img.webp"}
                alt="prime winner"
                width={450}
                height={450}
                className="mx-auto float-up-down max-md:h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
