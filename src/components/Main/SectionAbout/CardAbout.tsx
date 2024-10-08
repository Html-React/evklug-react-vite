import styled from "styled-components";

interface InfoSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoSectionAbout = styled.div``;
const InfoIcon = styled.div``;
const InfoTitle = styled.h3``;
const InfoDescription = styled.p``;

const InfoSection: React.FC<InfoSectionProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <InfoSectionAbout>
      <InfoIcon>{icon}</InfoIcon>
      <InfoTitle>{title}</InfoTitle>
      <InfoDescription>{description}</InfoDescription>
    </InfoSectionAbout>
  );
};

export default InfoSection;
