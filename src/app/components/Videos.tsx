import Link from "next/link";
import Container from "./Container";
import MainTiltle from "./ui/MainTiltle";
import Button from "./ui/Button";

const Videos = () => {
  return (
    <Container className="sec-padding">
      <MainTiltle>
        مواسم مسابقة <span>PRIME WINNER</span>
      </MainTiltle>
      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <iframe
            src="https://www.youtube.com/embed/roo6IWmkoMk?si=J9NXIPowCNcimW9i"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-[100%] lg:h-[230px] h-[200px] max-md:mb-1.5"
          ></iframe>
          <Link href={"/"}>
            <Button className="w-full py-2 text-white hover:translate-y-0 bg-[#04562D] hover:text-[#04562D] hover:bg-[#DDB750]">
              اقرأ تفاصيل الموسم الأول
            </Button>
          </Link>
        </div>

        <div>
          <iframe
            src="https://www.youtube.com/embed/HSZ-DsjRG8A?si=NFsnaBxGNfy9hBlI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-[100%] lg:h-[230px] h-[200px] max-md:mb-1.5"
          ></iframe>
          <Link href={"/"}>
            <Button className="w-full py-2 text-white bg-[#04562D] hover:translate-y-0 hover:text-[#04562D] hover:bg-[#DDB750]">
              اقرأ تفاصيل الموسم الأول
            </Button>
          </Link>
        </div>

        <div>
          <iframe
            src="https://www.youtube.com/embed/wAJheHdllaU?si=DwGUhfG_Z2ELEM76"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-[100%] lg:h-[230px] h-[200px] max-md:mb-1.5"
          ></iframe>
          <Link href={"/"}>
            <Button className="w-full py-2 text-white bg-[#04562D] hover:translate-y-0 hover:text-[#04562D] hover:bg-[#DDB750]">
              اقرأ تفاصيل الموسم الأول
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Videos;
