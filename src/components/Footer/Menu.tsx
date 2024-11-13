import styled from "styled-components";
import Logo from "../Header/Logo";
import { MenuList } from "./MenuList";
import { OkIcon, VkIcon } from "./Icon";

const FooterContainer = styled.div`
  width: 252px;
`;

const FooterMenu = styled.ul`
  padding-top: 10px;
`;

const NavLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
  color: var(--color-White);
  transition: color 0.3s;

  &:hover {
    color: var(--color-Orange);
  }
`;

const Icons = styled.div`
  margin: 90px 0 50px 0;
`;

const IconLink = styled.div`
  display: inline-block;
  margin-right: 25px;
`;

const Menu: React.FC = () => {

    const List = MenuList.map((item) => (
        <li key={item.id}>
            <NavLink href={item.url}>
                {item.name}
            </NavLink>
        </li>));
    
    return (
      <FooterContainer>
        <Logo color="var(--color-White)" width="224" />
        <FooterMenu>{List}</FooterMenu>
        <Icons>
          <IconLink><OkIcon /></IconLink>
          <IconLink><VkIcon /></IconLink>          
        </Icons>
      </FooterContainer>
    );
};

export default Menu;