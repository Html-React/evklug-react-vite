import styled from "styled-components";

interface DescriptionTextProps {
  description: string;
  className?: string;
}

const InfoDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;  
`;

const TextDescription: React.FC<DescriptionTextProps> = ({ description, className }) => {

  return (
    <InfoDescription
      className={className}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
    
};

export default TextDescription;