import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import { Container } from "../Container";
import { Button } from "../Main/Button";

const StyledSection = styled(Container).attrs({ as: "section" })`
  position: relative;
  color: var(--color-White);
  margin-top: 50px;
`;

const ProjectContainer = styled.div`
  position: absolute;
  z-index: 2;
`;
const ProjectHeader = styled.h1`
  max-width: 60%;
  font-weight: 800;
  font-size: 70px;
  line-height: 85px;
  padding: 100px 80px 0 80px;
`;
const ProjectDescription = styled.p`
  max-width: 60%;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  padding: 24px 80px 0 80px;
`;
const ProjectButton = styled(Button).attrs({ as: "button" })`
  font-weight: 700;
  font-size: 23px;
  line-height: 28px;
  text-align: center;
  color: var(--color-White);
  border-radius: 16px;
  background-color: var(--color-Orange);
  margin: 90px 80px 0 80px;
  padding: 25px 39px;

  &:focus {
    background: var(--color-PastelOrange);
    color: var(--color-White);
  }

  &:hover {
    background: var(--color-PastelOrange);
    color: var(--color-White);
  }

  &:active {
    background: var(--color-Gamboge);
    color: var(--color-White);
  }
`;


const SectionSlider = () => {
    return (
      <StyledSection>
        <ProjectContainer>
            <ProjectHeader>
                Проектные решения любой сложности
            </ProjectHeader>
            <ProjectDescription>
                Есть над чем задуматься: базовые сценарии поведения пользователей
                и по сей день остаются уделом проектантов
            </ProjectDescription>
            <ProjectButton type="button">Заказать расчёт</ProjectButton>
        </ProjectContainer>
        <ImageSlider />
      </StyledSection>
    );
};

export default SectionSlider;