interface IProps {
  title: string;
}

const CountdownTimer = ({ title }: IProps) => {
  return (
    <div className="bg-[#244129] px-6 pt-2 pb-3 text-center shadow-[1px_0px_10px_0px_rgba(0,0,0,0.5)]">
      <div className="text-[#fec503] text-2xl md:text:3xl lg:text-5xl font-semibold">
        00
      </div>
      <div className="text-sm md:text-base lg:text-xl -mt-1">{title}</div>
    </div>
  );
};

export default CountdownTimer;
