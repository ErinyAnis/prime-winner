import { twMerge } from 'tailwind-merge';

interface IProps {
    children: React.ReactNode,
    className?: string,
}

const Container = ({children,className}:IProps) => {
  return (
    <div className={twMerge("max-w-7xl mx-auto px-6 sm:px-8 lg:px-12",className )}>{children}</div>
  )
}

export default Container