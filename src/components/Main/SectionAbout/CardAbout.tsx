import styled from "styled-components";
import TextDescription from "../../TextDescription";

interface InfoSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoSectionAbout = styled.div`
  display: flex;
  align-items: center;  
  width: 872px;
  min-height: 295px;
  border: 1px solid #CACACA;
  border-radius: 32px;
`;

const InfoIcon = styled.div`
  padding: 0 50px 0 60px;
`;
const InfoContainer = styled.div`
  margin-right: 80px;
`;
const InfoTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;
const InfoDescription = styled(TextDescription)`
  padding-top: 8px;
`;

const InfoSection: React.FC<InfoSectionProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <InfoSectionAbout>
      <InfoIcon>{icon}</InfoIcon>
      <InfoContainer>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescription description={description} />
      </InfoContainer>      
    </InfoSectionAbout>
  );
};

export default InfoSection;
