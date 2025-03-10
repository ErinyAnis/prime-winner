import { twMerge } from "tailwind-merge";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: IProps) => {
  return (
    <button
      className={twMerge(
        "bg-indigo-600 py-[10px] px-6 rounded-lg text-black md:ml:8 hover:-translate-y-1 duration-500 cursor-pointer ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
