import styled from "styled-components";
import { Container } from "../../Container";
import CardAbout from "./CardAbout";
import ImageOverlay from "./ImageOverlay";
import BoxIcon from "../../../assets/Frame16.svg?react";
import GearIcon from "../../../assets/Frame12.svg?react";
import ImgWorker from "../../../assets/worker.png";
import TextAbout from "./TextAbout";

const SectionAbout = styled(Container).attrs({ as: "section" })`
padding-top: 100px;
`;
const MainLayout = styled.div``;
const InfoSections = styled.div``;
const StyledBoxIcon = styled(BoxIcon)``;
const StyledGearIcon = styled(GearIcon)``;
const StyledImageOverlay = styled(ImageOverlay)``;


const About: React.FC = () => {
  return (
    <SectionAbout>
      <TextAbout
        title="О нас"
        description="Также как перспективное планирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса экспериментов, поражающих по своей масштабности и грандиозности. А также диаграммы связей могут быть описаны максимально подробно. Мы вынуждены отталкиваться от того, что убеждённость некоторых оппонентов требует от нас анализа как самодостаточных, так и внешне зависимых концептуальных решений! Следует отметить, что высококачественный прототип будущего проекта предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач. Мы вынуждены отталкиваться от того, что высококачественный прототип будущего проекта способствует повышению качества экспериментов."
      />
      <MainLayout>
        <StyledImageOverlay
          imgSrc={ImgWorker}
          overlayText="Принимая во внимание показатели успешности, перспективное планирование способствует подготовке и реализации новых принципов"
          buttonText="Подробнее"
        />

        <InfoSections>
          <CardAbout
            icon={<StyledBoxIcon />}
            title="Консультация с широким активом"
            description="А также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для как самодостаточных, так и внешне зависимых концептуальных решений"
          />

          <CardAbout
            icon={<StyledGearIcon />}
            title="В своём стремлении повысить"
            description="Качество жизни, они забывают, что сплочённость команды профессионалов представляет собой интересный эксперимент проверки прогресса профессионального сообщества"
          />
        </InfoSections>
      </MainLayout>
    </SectionAbout>
  );
};

export default About;
