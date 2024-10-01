import styled from "styled-components";
import { Container } from "./Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import BurgerMenu from "./BurgerMenu";

const HeaderContainer = styled.header`
  background-color: var(--color-White);
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 32px 32px;
`;

const LogoHref = styled.a`
  padding: 14px 0 3px 0;
`;

const ContainerHeader = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;



const Header = () => {

  return (
    <HeaderContainer>
      <ContainerHeader>
        <BurgerMenu />
        <LogoHref href="#0">
          <Logo />
        </LogoHref>
        <Menu />
        <Search/>
      </ContainerHeader>
    </HeaderContainer>
  );
};

export default Header;
