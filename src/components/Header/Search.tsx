import { useRef, useState } from "react";
import styled from "styled-components";
import SearchIcon from "./SearchIcon";
import closedSearchImg from "../../assets/closed_search.png";
import { useOnClickOutside } from "../UseOnClickOutside";

interface SearchOpenProps {
  $isOpenSearch: boolean;
}

interface StyledSearchIconProps {
  $isVisible: boolean;
}

const SearchContainer = styled.div<SearchOpenProps>`
  display: flex;
  position: absolute;
  justify-items: center;
  align-items: center;
  right: 0;
  width: 539px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.12);
  padding: 18px 13px 18px 32px;
  transform: ${(props) =>
    props.$isOpenSearch ? "translateY(0)" : "translateY(-205px)"};
  transition: transform 0.7s;
  z-index: 1;

  @media (max-width: 800px) {
    width: 100%;
    height: 69px;
    border-radius: 0 0 24px 24px;
    z-index: 4;
  }
`;
const SearchText = styled.div`
  width: 100%;
`;
const SearchInput = styled.input`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #cacaca;
  outline: 0;
  padding: 5px 0;
`;
const SearchIconContainer = styled.div`
  display: flex;
  padding: 0 20px 0 14px;
`;
const SearchCloseButton = styled.div`
  display: flex;
  cursor: pointer;
`;

const StyledSearchIcon = styled.div<StyledSearchIconProps>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 4px 4px 0px 4px;

  /* Используем $isVisible для управления видимостью */
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};

  &:hover svg path {
    stroke: var(--color-Orange);
    transition: stroke 0.4s ease;
  }

  &:hover svg rect {
    fill: var(--color-Orange);
    transition: fill 0.4s ease;
  }
`;

const Search = () => {
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleIconClick = () => {
    setIsIconVisible(false);
    setIsOpenSearch(true);
  };

  const ClosedSearch = () => {
    setIsIconVisible(true);
    setIsOpenSearch(false);
  };

  useOnClickOutside(dropdownRef, ClosedSearch);

  return (
    <>
      <StyledSearchIcon $isVisible={isIconVisible} onClick={handleIconClick}>
        <SearchIcon />
      </StyledSearchIcon>

      <SearchContainer ref={dropdownRef} $isOpenSearch={isOpenSearch}>
        <SearchText>
          <SearchInput type="text" placeholder="Что будем искать?" />
        </SearchText>

        <SearchIconContainer>
          <SearchIcon color="#FF9900" />
        </SearchIconContainer>

        <SearchCloseButton onClick={ClosedSearch}>
          <img src={closedSearchImg} alt="Поиск закрыть" />
        </SearchCloseButton>
      </SearchContainer>
    </>
  );
};

export default Search;
