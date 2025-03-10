interface IProps {
  title: string;
  className?: string;
}

const RegistrationCard = ({ title, className }: IProps) => {
  return (
    <li
      className={`px-5 py-5 lg:py-9 text-lg lg:text-2xl rounded-lg font-semibold ${className} `}
    >
      {title}
    </li>
  );
};

export default RegistrationCard;
