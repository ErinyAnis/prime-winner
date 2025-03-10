interface IProps {
    num: string;
    title: string;
}

const CounterCard = ({num, title}:IProps) => {
  return (
    <div className="pt-2 pb-3 text-center">
      <div className="text-[#fec503] text-4xl lg:text-6xl">
        {num}
      </div>
      <div className="text-2xl lg:text-3xl mt-2 lg:mt-3">{title}</div>
    </div>
  )
}

export default CounterCard