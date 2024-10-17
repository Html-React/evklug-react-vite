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
  border-radius: 32px;
`;
const Overlay = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center; 
  width: 868px;
  height: 196px;
  background: rgba(0, 0, 0, 0.5);  
  margin-top: 426px;
  border-radius: 0 0 32px 32px;
`;

const OverlayContainerText = styled.div`
  padding-left: 50px;
`
const OverlayContainerButton = styled.div`
  padding-right: 50px;
`

const OverlayText = styled.p`
  max-width: 433px;  
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  color: var(--color-White);
`;

const ButtonAbout = styled(Button).attrs({ as: "button" })`  
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  padding: 18px 35px;
  color: var(--color-White);
  border: 3px solid var(--color-Orange);
  border-radius: 16px;

  &:hover {
    background: var(--color-Orange);  
  }  

  &:active {
  background: var(--color-Gamboge);
  border: 3px solid var(--color-Gamboge);
  }
  
`;



const ImageOverlay: React.FC<ImageOverlayProps> = ({
  imgSrc,
  overlayText,
  buttonText,
}) => {
  return (
    <ImageOverlayAbout>
      <ImageAbout src={imgSrc} alt="Рабочий на строительстве" />
      <Overlay>
        <OverlayContainerText>
          <OverlayText>{overlayText}</OverlayText>
        </OverlayContainerText>   
        <OverlayContainerButton>
          <ButtonAbout type="button">{buttonText}</ButtonAbout>
        </OverlayContainerButton>        
      </Overlay>
    </ImageOverlayAbout>
  );
};

export default ImageOverlay;
