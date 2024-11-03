import React, { useState } from "react";
import styled from "styled-components";
import { QuestionsItem, QuestionsList } from "./QuestionsList";

interface AnswerOpenProps {
  $isOpen: boolean;  
}

const CloseOpenBox = styled.span<AnswerOpenProps>`
  width: 50px;
  height: 50px;
  background-color: var(--color-PastelGray);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s ease, transform 0.4s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: var(--color-Black);
    transition: background-color 0.4s, rotate 0.4s ease-in-out;
  }

  &::before {
    width: 31px;
    height: 2px;
  }

  &::after {
    width: 2px;
    height: 31px;
  }

  /* Меняем вид значка в зависимости от состояния */
  ${(props) =>
    props.$isOpen &&
    `     
      &::before,
      &::after {
        rotate: 45deg;       
      }
    `}
`;
const FaqItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-PastelGray);
  border-bottom: 1px solid var(--color-PastelGray);  
  transition: border-top 0.4s ease, border-bottom 0.4s ease;

  &:not(:first-child) {
    margin-top: -1px; // Смещаем каждый элемент, кроме первого, на 1px вверх
  }

  &:hover {
    position: relative;
    border-top: 1px solid var(--color-Orange);
    border-bottom: 1px solid var(--color-Orange);
    z-index: 0;
  }
`;

const Question = styled.button<AnswerOpenProps>`
  display: flex;
  gap: 52px;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  width: 100%;
  border: none;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 0;
  padding: 40px 0;
  transition: color 0.4s ease;

  &:hover {
    color: ${(props) =>
      props.$isOpen ? "var(--color-Black)" : "var(--color-Orange)"};
  }

  &:hover ${CloseOpenBox} {
    background-color: ${(props) =>
      props.$isOpen ? "var(--color-PastelGray)" : "var(--color-Orange)"};
    &::before,
    &::after {
      background-color: ${(props) =>
        props.$isOpen ? "var(--color-Black)" : "var(--color-White)"};
    }
  }
`;

const Answer = styled.div<AnswerOpenProps>`
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  max-height: ${(props) => (props.$isOpen ? "1000px" : "0px")};
  padding: ${(props) => (props.$isOpen ? "0 0 40px 0" : "0")};  
  transform-origin: top;
  transition: padding 0.6s ease, opacity 0.9s ease, max-height 0.9s ease;
  overflow: hidden;
`;

const AnswerContent = styled.div`
  padding: 0;
  max-width: 57%;
`;

const QuestionsContent: React.FC = () => {
  const [openQuestionIds, setOpenQuestionIds] = useState<string[]>([]);

  const toggleFAQ = (id: string) => {
    setOpenQuestionIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((itemId) => itemId !== id)
        : [...prevIds, id]
    );
  };

  return (
    <ul>
      {QuestionsList.map((item: QuestionsItem) => (
        <FaqItem>
          <Question
            key={item.id}
            onClick={() => toggleFAQ(item.id)}
            $isOpen={openQuestionIds.includes(item.id)}
            aria-expanded={openQuestionIds.includes(item.id)}
            aria-controls={`faq-answer-${item.id}`}
          >
            {item.title}
            <CloseOpenBox $isOpen={openQuestionIds.includes(item.id)} />
          </Question>
          <Answer
            $isOpen={openQuestionIds.includes(item.id)}
            id={`faq-answer-${item.id}`}
          >
            <AnswerContent
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </Answer>
        </FaqItem>
      ))}
    </ul>
  );
};

export default QuestionsContent;
