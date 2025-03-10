import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import FooterSocialLinks from "./ui/FooterSocialLinks";
import { AiFillFacebook, AiFillTikTok } from "react-icons/ai";
import {
  FaSquareInstagram,
  FaLinkedin,
  FaYoutube,
  FaTelegram,
  FaSquareWhatsapp,
} from "react-icons/fa6";

const links = ["مميزاتنا", "خطوات التسجيل", "الأسئلة الشائعة"];
const icons = [
  AiFillFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaYoutube,
  AiFillTikTok,
  FaTelegram,
  FaSquareWhatsapp,
];

const Footer = () => {
  return (
    <footer className="sec-padding bg-[#0D2A2C]">
      <Container className="grid grid-cols-4">
        <figure className="col-span-4 lg:col-span-2">
          <Image
            src={"/images/hero-img.webp"}
            alt="prime winner"
            width={330}
            height={330}
          />
        </figure>

        <div className="max-md:col-span-2">
          <h3 className="mb-3 lg:mb-4 text:lg lg:text-xl">روابط هامة</h3>
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-sm text-white/80 main-transition hover:text-brand-color"
              >
                <Link href={"/"}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-md:col-span-2">
          <h3 className="mb-3 lg:mb-4 text:lg lg:text-xl">تابعنا</h3>
          <div className="lg:max-w-52">
            <div className="flex gap-2 lg:gap-3 flex-wrap">
              {icons.map((Icon, idx) => (
                <FooterSocialLinks key={idx} Icon={Icon} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
