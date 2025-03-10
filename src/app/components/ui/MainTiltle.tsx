import { twMerge } from "tailwind-merge";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const MainTiltle = ({ className, children }: IProps) => {
  return (
    <h2
      className={twMerge(
        "main-title text-2xl md:text-4xl lg:text-5xl mb-7 lg:mb-10",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default MainTiltle;
