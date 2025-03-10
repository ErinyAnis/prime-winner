import Image from "next/image";
import { BiSolidQuoteRight } from "react-icons/bi";

interface IProps {
  review: string;
  image: string;
  userName: string;
}

const OpinionCard = ({ review, image, userName }: IProps) => {
  return (
    <div className="p-5 lg:p-8 bg-[#1B2D29] cursor-grab max-md:mx-2 lg:mr-5 rounded-xl main-transition border border-transparent hover:border-green-500">
      <p className="text-white/80 max-md:text-sm">{review}</p>
      <hr className="text-gray-600 my-5 lg:my-8" />
      {/* bottom */}
      <div className="flex items-center justify-between">
        <BiSolidQuoteRight className="text-gray-500/90" size={32} />
        <div className="flex items-center gap-3 lg:gap-4">
          <h3 className="text-lg lg:text-xl font-semibold">{userName}</h3>
          <Image
            src={image}
            alt="user-img"
            width={45}
            height={45}
            className="rounded-full object-contain max-md:max-h-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OpinionCard;
