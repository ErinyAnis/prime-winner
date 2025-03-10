"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Container from "./Container";

const Navbar = () => {
  const links = [
    { name: "الرئيسية", link: "/" },
    { name: "مميزاتنا", link: "/" },
    { name: "خطوات التسجيل", link: "/" },
    { name: "الاسئلة الشائعة", link: "/" },
    { name: "المواسم", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav>
        <div
          className={`w-full absolute top-0 left-0 z-10 ${
            isSticky ? "bg-[#0e352a] shadow-lg fixed" : "bg-transparent"
          }`}
        >
          <Container>
            <div className="flex items-center justify-between py-4 gap-4 lg:gap-5">
              <div className="mt-3">
                <Link href={"/"}>
                  <Image
                    src={"/images/prime-logo.webp"}
                    alt="prime-logo"
                    height={170}
                    width={170}
                    className="max-lg:max-w-32 object-contain"
                  />
                </Link>
              </div>

              <div
                onClick={() => setOpen(!open)}
                className="text-2xl absolute left-8 top-6 cursor-pointer md:hidden"
              >
                {open ? <IoClose /> : <RxHamburgerMenu />}
              </div>

              <ul
                className={`md:flex md:items-center justify-center max-lg:rounded-md max-md:mx-auto max-md:absolute max-md:left-1/2  max-md:transform max-md:-translate-x-1/2 md:static max-md:bg-body-color md:z-auto max-lg:w-[80%] flex-1 md:gap-4 lg:gap-8 transition-all duration-500 ease-in max-md:px-8 ${
                  open
                    ? "top-20 opacity-100"
                    : "top-[-490px] md:opacity-100 opacity-0"
                }`}
              >
                {links.map((link, idx) => (
                  <li key={idx} className="text-base lg:text-lg md:my-0 my-4">
                    <Link href={link.link} className="">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button className="max-md:ml-12 max-sm:hidden bg-[#6ba543] text-black cursor-pointer">
                سجل الأن
              </Button>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
