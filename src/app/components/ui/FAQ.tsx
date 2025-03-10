interface FAQItem {
  question: string;
  answer: string;
  open: boolean;
}

interface IProps {
  faq: FAQItem;
  index: number;
  toggleFAQ: (index: number) => void;
}

const FAQ = ({ faq, index, toggleFAQ }: IProps) => {
  return (
    <div
      className={"faq h-fit cursor-pointer w-full break-inside-avoid bg-[#1d3c33] p-4 rounded-lg " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question lg:text-xl">{faq.question}</div>
      <p className="faq-answer text-sm text-white/70">{faq.answer}</p>
    </div>
  );
};

export default FAQ;
