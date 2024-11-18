import { useState } from "react";
import { WorkList, WorkItem } from "./WorkList";
import styled, { css } from "styled-components";
import TextDescription from "../../TextDescription";
import { Button } from "../SectionSlider/Button";

interface ButtonSelectedProps {
  $isActiveWork: boolean;
}

const WorkButton = styled.div`
  margin-top: 50px;
`;
const WorkBlock = styled.div<{ $fade: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 45px;

  /* Анимация */
  transition: opacity 0.3s ease, transform 0.3s ease;
  ${({ $fade }) =>
    $fade
      ? css`
          opacity: 0;
          transform: translateY(20px);
        `
      : css`
          opacity: 1;
          transform: translateY(0);
        `}
`;
const WorkBlockContent = styled.div`
  width: 740px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Все элементы в начале контейнера */
`;

const WorkBlockImg = styled.div`
  width: 870px;
  height: 460px;
`;

const WorkImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  object-fit: cover;
`;


const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  padding-bottom: 8px;
`;
const ButtonBlock = styled.div`
  margin-top: auto;
`;

const ButtonSelected = styled(Button).attrs({ as: "button" })<ButtonSelectedProps>`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.94px;
  margin-right: 85px;
  color: ${({ $isActiveWork }) =>
    $isActiveWork ? "var(--color-Gamboge)" : "initial"};

  &:hover {
    color: var(--color-PastelOrange);
  }
`;
const ButtonReadMore = styled(Button).attrs({ as: "button" })`
  padding: 19px 38px 19px 38px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.5px;
  text-align: center;
  background: #ff9900;
  color: var(--color-White);
  margin-right: 32px;

  &:hover {
    background: var(--color-PastelOrange);
  }

  &:active {
    background: var(--color-Gamboge);
  }
`;


const ButtonContract = styled(Button).attrs({ as: "button" })`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.5px;
  text-align: center;
  padding: 19px 38px 19px 38px;
  border-radius: 16px;
  border: 1px solid #000000;

  &:hover {
    background: var(--color-DimGray);
    border: 1px solid var(--color-DimGray);
    color: var(--color-White);
  }

  &:active {
    background: #000000;
    border: 1px solid #000000;
    color: var(--color-White);
  }
`;

const WorkContent: React.FC = () => {  
  const [selectedWork, setSelectedWork] = useState<WorkItem>(WorkList[0]);
  const [fade, setFade] = useState<boolean>(false);
  const handleClick = (item: WorkItem) => {
    setFade(true); // Включаем анимацию исчезновения
    setTimeout(() => {
      setSelectedWork(item);; // Меняем контент
      setFade(false); // Включаем анимацию появления
    }, 300);        
  };

  return (
    <>
      <WorkButton>
        {WorkList.map((item) => (
          <ButtonSelected
            key={item.id}
            onClick={() => handleClick(item)}
            $isActiveWork={selectedWork.id === item.id} // Проверка на активность
          >
            {item.name}
          </ButtonSelected>
        ))}
      </WorkButton>

      <WorkBlock $fade={fade}>
        <WorkBlockContent>
          <Title>{selectedWork.title}</Title>
          <TextDescription description={selectedWork.description} />

          {selectedWork.id === "0" && (
            <ButtonBlock>
              <ButtonReadMore>Подробнее</ButtonReadMore>
              <ButtonContract>Договор</ButtonContract>
            </ButtonBlock>
          )}
        </WorkBlockContent>

        <WorkBlockImg>
          <WorkImg src={selectedWork.img} alt={selectedWork.alt} />
        </WorkBlockImg>
      </WorkBlock>
    </>
  );
};

export default WorkContent;
