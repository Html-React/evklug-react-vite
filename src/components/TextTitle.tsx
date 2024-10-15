import styled from "styled-components";

interface TitleTextProps {
  title: string;
  className?: string;
}

const InfoTitle = styled.h1`
  font-weight: 400;
  font-size: 48px;
  line-height: 58.51px;
`;

const TextTitle: React.FC<TitleTextProps> = ({ title, className }) => {

    return <InfoTitle className={className}>{title}</InfoTitle>;
};


export default TextTitle;
