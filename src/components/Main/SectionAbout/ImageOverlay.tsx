import styled from "styled-components";
import { Button } from "../SectionSlider/Button";

interface ImageOverlayProps {
  imgSrc: string;
  overlayText: string;
  buttonText: string;
}

const ImageOverlayAbout = styled.div`
  display: flex;
  position: relative;
`;

const ImageAbout = styled.img`  
  width: 868px;
  height: 622px;
`;
const Overlay = styled.div`
  display: flex;
  position: absolute;
  width: 868px;
  height: 196px;
  background: rgba(0, 0, 0, 0.5);  
  margin-top: 426px;
`;
const OverlayText = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  color: var(--color-White);
`;
const ButtonAbout = styled(Button).attrs({ as: "button" })``;



const ImageOverlay: React.FC<ImageOverlayProps> = ({
  imgSrc,
  overlayText,
  buttonText,
}) => {
  return (
    <ImageOverlayAbout>
      <ImageAbout src={imgSrc} alt="Рабочий на строительстве" />
      <Overlay>
        <OverlayText>{overlayText}</OverlayText>
        <ButtonAbout type="button">{buttonText}</ButtonAbout>
      </Overlay>
    </ImageOverlayAbout>
  );
};

export default ImageOverlay;
