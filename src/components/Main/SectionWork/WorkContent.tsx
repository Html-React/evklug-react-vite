import { useState } from "react";
import { WorkList, WorkItem } from "./WorkList";
import styled from "styled-components";
import TextDescription from "../../TextDescription";
import { Button } from "../SectionSlider/Button";


const WorkButton = styled.div`
  margin-top: 50px;  
`;
const WorkBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;  
  margin-top: 45px;
  border: 1px solid #000000;
`;
const WorkBlockContent = styled.div`
  width: 758px;  
`;
const WorkBlockImg = styled.div`  
`;

const WorkImg = styled.img`
  width: 870px;
  height: 460px;
  border-radius: 32px;
`;


const Title = styled.h2`  
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;  
`;
const ButtonSelected = styled(Button).attrs({ as: "button" })`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.94px;
  margin-right: 85px;
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
  margin: 18px 32px 0 0;

  &:hover {
    background: var(--color-Orange);
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
    background: var(--color-Orange);
  }

  &:active {
    background: var(--color-Gamboge);
    border: 1px solid var(--color-Gamboge);
  }
`;



const WorkContent: React.FC = () => {  
  const [selectedWork, setSelectedWork] = useState<WorkItem>(WorkList[0]);
  const handleClick = (item: WorkItem) => {
    setSelectedWork(item);
  };

  return (
    <>
      <WorkButton>
        {WorkList.map((item) => (
          <ButtonSelected key={item.id} onClick={() => handleClick(item)}>
            {item.name}
          </ButtonSelected>
        ))}
      </WorkButton>

      <WorkBlock>
        <WorkBlockContent>
          <Title>{selectedWork.title}</Title>
          <TextDescription description={selectedWork.description} />
          <ButtonReadMore>Подробнее</ButtonReadMore>
          <ButtonContract>Договор</ButtonContract>
        </WorkBlockContent>

        <WorkBlockImg>
          <WorkImg src={selectedWork.img} alt={selectedWork.alt} />
        </WorkBlockImg>
      </WorkBlock>
    </>
  );
};

export default WorkContent;
