import { useState } from "react";
import styled from "styled-components";
import { MenuList } from "./MenuList"; // импортируем типизированный список

// Интерфейс для пропсов активного состояния NavLink
interface NavLinkActive {
  $isActive: boolean;
}

const Nav = styled.nav`
  padding-left: 24%;

  @media (max-width: 1400px) {
    padding-left: 0;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

const NavItem = styled.li`
  padding-right: 75px;

  @media (max-width: 1220px) {
    padding-right: 60px;
  }

  @media (max-width: 1062px) {
    padding-right: 20px;
  }

  @media (max-width: 880px) {
    padding-right: 15px;
  }
`;

const NavLink = styled.a<NavLinkActive>`
  position: relative;
  color: ${(props) =>
    props.$isActive ? "var(--color-Orange)" : "var(--color-Black)"};
  padding: 5px;
  text-decoration: none;
  transition: color 0.7s;

  &::before {
    content: "";
    position: absolute;
    left: ${(props) => (props.$isActive ? "0" : "50%")};
    bottom: 0;
    width: ${(props) => (props.$isActive ? "100%" : "0")};
    height: 2px;
    background-color: var(--color-Orange);
    transition: width 0.4s ease, left 0.4s ease;
  }

  &:hover::before {
    width: 100%;
    left: 0;
  }
`;

// Типизация компонента Menu
const Menu: React.FC = () => {
  const [activeItemId, setActiveItemId] = useState<string>("0"); // Состояние для хранения активного элемента

  // Типизация функции handleClick
  const handleClick = (id: string) => {
    setActiveItemId(id); // Устанавливаем активный элемент при клике
  };

  const List = MenuList.map((item) => (
    <NavItem key={item.id}>
      <NavLink
        href={item.url}
        onClick={() => handleClick(item.id)}
        $isActive={activeItemId === item.id} // Проверяем, активен ли текущий элемент
      >
        {item.name}
      </NavLink>
    </NavItem>
  ));

  return (
    <Nav>
      <NavList>{List}</NavList>
    </Nav>
  );
};

export default Menu;
