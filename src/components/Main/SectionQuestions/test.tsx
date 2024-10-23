import React, { useState } from "react";
import styled from "styled-components";
import { QuestionsItem, QuestionsList } from "./QuestionsList";

const FAQItem = styled.div`
  margin-bottom: 1em;
`;

const Question = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ isOpen }) => (isOpen ? "#f0f0f0" : "#fff")};
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Answer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  padding: ${({ isOpen }) => (isOpen ? "10px 0" : "0")};
`;

const FAQ: React.FC = () => {
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  // Функция для переключения открытого вопроса
  const toggleFAQ = (id: string) => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      {QuestionsList.map((item: QuestionsItem) => (
        <FAQItem key={item.id}>
          <Question
            isOpen={openQuestionId === item.id}
            onClick={() => toggleFAQ(item.id)}
          >
            <span>{item.title}</span>
            <span>{openQuestionId === item.id ? "-" : "+"}</span>
          </Question>
          <Answer isOpen={openQuestionId === item.id}>
            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
          </Answer>
        </FAQItem>
      ))}
    </div>
  );
};

export default FAQ;
