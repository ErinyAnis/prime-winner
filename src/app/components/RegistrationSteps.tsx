import { registrationData } from "../data/registration";
import Container from "./Container";
import MainTiltle from "./ui/MainTiltle";
import RegistrationCard from "./ui/RegistrationCard";

export default function RegistrationSteps() {
  return (
    <div className="bg-[#0F2417]">
      <Container className="sec-padding">
        <MainTiltle className="text-center">
          خطوات <span>التسجيل</span> على <br />
          المسابقة
        </MainTiltle>

        <div className="relative">
          <ol className="md:grid grid-cols-2 md:gap-5 lg:gap-7 max-md:space-y-3">
            {registrationData.map(({ title }, idx) => (
              <RegistrationCard
                key={idx}
                title={title}
                className={`
                    ${
                      idx % 2 === 0
                        ? "col-start-2 bg-linear-to-r from-[#1d3c33df] to-[#494f4e00] "
                        : "col-start-1 col-end-3 bg-linear-to-r to-[#1d3c33df] from-[#494f4e00] md:w-[47%] max-sm:mr-14"
                    }
                    `}
              />
            ))}
          </ol>

          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-2 rounded-full bg-white/20">
            <span className="h-[60%] bg-[#00D094] w-[100%] z-10 inline-block rounded-full"></span>
          </div>
        </div>
      </Container>
    </div>
  );
}
