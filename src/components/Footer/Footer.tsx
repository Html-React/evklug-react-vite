import styled from "styled-components";
import { Container } from "../Container";
import FooterMenu from "./Menu";
import FooterForm from "./Form";
import FooterContent from "./Content";

const FooterSections = styled.footer`
  background-color: var(--color-Black);
  margin-top: 100px;  
`;
const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

const Footer: React.FC = () => {
    return (
        <FooterSections>
            <FooterContainer>
              <FooterMenu />
              <FooterForm />
              <FooterContent/>
            </FooterContainer>
        </FooterSections>       
  
)};

export default Footer;
