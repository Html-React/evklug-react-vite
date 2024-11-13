import styled from "styled-components";

// Типизация свойств для компонента Checkbox
interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

// Создаем стилизованный компонент для чекбокса
const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;  
  cursor: pointer;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border: 1px solid var(--color-PastelGray);
  border-radius: 2px;
  transition: all 0.2s ease;  
`;

const Checkmark = styled.div<{ checked: boolean }>`
  position: absolute;
  top: -7px;
  display: ${(props) => (props.checked ? "block" : "none")};
`;

const CheckboxLabel = styled.span`
  margin-left: 8px;
  font-size: 16px;
  color: var(--color-PastelGray);
  
`;

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox>
        <Checkmark checked={checked}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="#97ee3f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Checkmark>
      </StyledCheckbox>
      {label && <CheckboxLabel>{label}</CheckboxLabel>}
    </CheckboxContainer>
  );
};

export default Checkbox;
