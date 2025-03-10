"use client";
import { commenQuestions } from "../data/commonQuestions";
import Container from "./Container";
import FAQ from "./ui/FAQ";
import MainTiltle from "./ui/MainTiltle";

import React, { useState } from "react";

const CommonQuestions = () => {
  const [faqs, setFaqs] = useState(commenQuestions);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false,
      }))
    );
  };

  return (
    <Container className="sec-padding">
      <MainTiltle>
        الأسئلة <span>الشائعة</span>
      </MainTiltle>

      <div className="faqs columns-1 md:columns-2 gap-5 space-y-5">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </Container>
  );
};

export default CommonQuestions;
