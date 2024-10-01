import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useOnClickOutside } from "./UseOnClickOutside";
import { MenuList } from "./MenuList";

interface BurgerMenuProps {
    $OpenBurger: boolean
}

const BurgerMenuContainerToggle = styled.div <BurgerMenuProps>`
  display:flex;
  position: relative;
  align-items: center;
  width: 30px;
  height: 23px;
  transition: all 0.4s;
  z-index: 4;

  ${(props) => props.$OpenBurger && css`
      transform: rotate(360deg);
    `}

  @media (max-width: 1138px) {
    display: flex;
  }
`;
const BurgerMenuContainer = styled.nav<BurgerMenuProps>`
  display: ${(props) => (props.$OpenBurger ? "flex" : "none")};
  position: absolute;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 420px;
  height: 100vh;
  z-index: 3;
  background: #ffffff;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 32px 32px;
  transform: ${(props) => (props.$OpenBurger ? "translateX(0)" : "translateX(-421px)")};
  transition: transform 0.4s;
`;

const BurgerMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const BurgerMenuLink = styled.a`
  display: block;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  line-height: 50px;
  background: #d8d8d8;
  color: #ffffff;
`;

const BurgerMenuToggle = styled.div<BurgerMenuProps>`
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: var(--color-Black);
  transition: all 0.4s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: var(--color-Black);
    transition: all 0.4s;
  }

  &:before {
    content: "";
    top: 10px;
  }

  &:after {
    content: "";
    top: -10px;
  }

  ${(props) => props.$OpenBurger && css`
      transform: rotate(-45deg); // Применяется, если бургер-меню открыто

      &::after {
        top: 0; // Перемещаем нижнюю линию
        opacity: 0; // Скрываем нижнюю линию
      }

      &::before {
        top: 0; // Перемещаем верхнюю линию
        transform: rotate(88deg); // Поворачиваем верхнюю линию
      }
    `}
`;

const BurgerMenu = () => {
    const dropdownBurger = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);

    const List = MenuList.map((item) => (
      <li key={item.id}>
        <BurgerMenuLink href={item.url}>
          {item.name}
        </BurgerMenuLink>
      </li>
    ));

    const closedBurger = () => {
      setIsActive(false);
    };

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    useOnClickOutside(dropdownBurger, closedBurger);

    return (
      <>
        <BurgerMenuContainerToggle
          $OpenBurger={isActive}
          onClick={handleToggle}
        >
          <BurgerMenuToggle $OpenBurger={isActive} />
        </BurgerMenuContainerToggle>

        <BurgerMenuContainer ref={dropdownBurger} $OpenBurger={isActive}>
          <BurgerMenuList>{List}</BurgerMenuList>
        </BurgerMenuContainer>
      </>
    );
};

export default BurgerMenu;