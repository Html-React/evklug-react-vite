import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import { Container } from "../Container";
import { Button } from "../Main/Button";

const StyledSection = styled(Container).attrs({ as: "section" })`
  position: relative;
  color: var(--color-White);
  margin-top: 50px;

  @media (max-width: 1025px) {
    padding: 0 50px;
  }

  @media (max-width: 680px) {
    padding: 0 15px;
  }
`;

const ProjectContainer = styled.div`
  position: absolute;
  z-index: 2;

  @media (max-width: 768px) {
    margin-right: 50px;
  }

  @media (max-width: 680px) {
    margin-right: 15px;
  }
`;
const ProjectHeader = styled.h1`
  max-width: 60%;
  font-weight: 800;
  font-size: 70px;
  line-height: 85px;
  padding: 100px 80px 0 80px;

  @media (max-width: 1652px) {
    max-width: 100%;
  }

  @media (max-width: 1025px) {
    font-size: 60px;
    line-height: 73.14px;
    padding: 160px 77px 0 77px;
  }

  @media (max-width: 900px) {
    padding: 77px 77px 0 77px;
  }

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 60.95px;
    padding: 160px 40px 0 40px;
  }

  @media (max-width: 680px) {
    font-size: 40px;
    padding: 160px 21px 0 22px;
    text-align: center;
  }

  @media (max-width: 534px) {
    line-height: 47px;
    padding: 45px 21px 0 22px;
  }

  @media (max-width: 430px) {
    font-size: 20px;
    line-height: 24.38px;
  }
`;
const ProjectDescription = styled.p`
  max-width: 60%;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  padding: 24px 80px 0 80px;

  @media (max-width: 1655px) {
    max-width: 100%;
  }

  @media (max-width: 1025px) {
    font-size: 20px;
    line-height: 24.38px;
    padding: 16px 187px 0 77px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 21.94px;
    padding: 16px 40px 0 40px;
  }

  @media (max-width: 680px) {
    padding: 16px 21px 0 22px;
    text-align: center;
  }

  @media (max-width: 430px) {    
    font-size: 12px;    
    line-height: 14.63px;   
  }
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

  @media (max-width: 1500px) {
    margin-top: 50px;
  }

  @media (max-width: 1025px) {
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    margin-left: 40px;
  }

  @media (max-width: 680px) {
    display: flex;
    margin: 60px auto;
  }

  @media (max-width: 430px) {
    padding: 10px 22px;
    border-radius: 6px;    
    font-size: 12px;    
    line-height: 14.63px;
    margin: 32px auto;
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