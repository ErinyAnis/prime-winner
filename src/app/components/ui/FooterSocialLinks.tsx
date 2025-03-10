import Link from "next/link";

interface Iprops {
    Icon: React.ElementType;
}

const FooterSocialLinks = ({Icon}:Iprops) => {
  return (
    <span className="h-8 w-8 border rounded-full p-2 main-transition flex items-center justify-center border-white/80 hover:border-brand-color">
      <Link href={"/"}>
        <Icon size={16} />
      </Link>
    </span>
  );
};

export default FooterSocialLinks;
