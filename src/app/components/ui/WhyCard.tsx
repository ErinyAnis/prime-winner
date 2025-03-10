import Image from "next/image";

type IProps = {
  image: string;
  mainTitle: string;
  subTitle: string;
};
const WhyCard = ({ image, mainTitle, subTitle }: IProps) => {
  return (
    <div className="flex gap-5 items-center mb-5 lg:mb-8">
      <div className="border rounded-full border-gray-500">
        <Image src={image} alt={mainTitle} width={70} height={70} className="max-md:max-w-[50px] object-contain" />
      </div>
      <div>
        <h3 className="font- text-lg lg:text-2xl">{mainTitle}</h3>
        <p className="text-sm lg:text-base mt-1 text-gray-400">{subTitle}</p>
      </div>
    </div>
  );
};

export default WhyCard;
