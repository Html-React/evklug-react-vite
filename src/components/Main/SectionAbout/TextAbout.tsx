import styled from "styled-components";

interface InfoTextProps {  
  title: string;
  description?: string;
}

const InfoTitle = styled.h1`
  font-weight: 400;
  font-size: 48px;
  line-height: 58.51px;  
`;
const InfoDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  padding-top: 20px;
  max-width: 70%;
`;

const TextAbout: React.FC<InfoTextProps> = ({ title, description = false}) => {
  return (
    <>
      <InfoTitle>{title}</InfoTitle>
      $decoration ? <InfoDescription>{description}</InfoDescription> : ''
    </>
  );
};

export default TextAbout;
