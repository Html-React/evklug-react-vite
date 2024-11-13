import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 570px;  
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 400;
  line-height: 58.51px;
  text-align: left;
  margin-bottom: 25px;
  color: var(--color-PastelGray);
`;

const Input = styled.input<{ $error?: boolean }>`
  padding: 19px 24px;
  margin-bottom: 25px;
  width: 100%;
  border: 1px solid
    ${({ $error }) => ($error ? "red" : "var(--color-GreyBrown)")};
  border-radius: 16px;
  background-color: var(--color-GreyBrown);
  color: var(--color-White);
  outline: none;

  &::placeholder {
    color: var(--color-PastelGray);
  }

  &:hover {
    background-color: var(--color-DimGray);
    border: 1px solid ${({ $error }) => ($error ? "red" : "var(--color-Grey)")};
  }

  &:focus {
    border-color: var(--color-PastelGray);
  }
`;

const TextArea = styled.textarea`
  padding: 19px 24px 54px 24px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid var(--color-GreyBrown);
  border-radius: 16px;
  background-color: var(--color-GreyBrown);
  color: var(--color-White);
  outline: none;
  resize: none;

  &::placeholder {
    color: var(--color-PastelGray);
  }

  &:hover {
    background-color: var(--color-DimGray);
    border: 1px solid var(--color-Grey);
  }

  &:focus {
    border-color: var(--color-PastelGray);
  }
`;

const ErrorMessage = styled.div`
  position: absolute;
  color: red;
  font-size: 12px;
  top: 25%;
  left: 5%;
   
`;

const ButtonBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button<{ disabled: boolean; $show: boolean }>`  
  width: 269px;
  height: 58px;   
  background-color: ${({ disabled }) =>
    disabled ? "var(--color-GreyBrown);" : "var(--color-Orange)"};
  color: var(--color-PastelGray);
  border: none;
  border-radius: 16px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:not(:disabled):hover {
    background-color: ${({ $show }) =>
      $show ? "var(--color-AndroidGreen)" : "var(--color-PastelOrange)"};
    color: var(--color-White);
  }

  background-color: ${({ $show }) =>
    $show ? "var(--color-AndroidGreen)" : ""};

  color: ${({ $show }) => ($show ? "var(--color-White)" : "")};
`;

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [dispatched, setDispatched] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Валидация email
  const validateEmail = (email: string) => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!email) {
      setEmailError("");
      setEmailTouched(false);
      return true;
    } else if (!emailRegex.test(email)) {
      setEmailError("Неправильный формат email");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
    
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    validateEmail(email);
  };

  const handleFocus = () => setEmailError("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isChecked && validateEmail(email) && name && email) {
      setDispatched(true);
      setTimeout(() => setDispatched(false), 3000);

      // Очистка полей
      setName("");
      setEmail("");
      setMessage("");
      setIsChecked(false);
      setEmailTouched(false);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  // Условие для отключения кнопки отправки
  const isSubmitDisabled =
    !isChecked || !!emailError || !name || !email || !message;

  return (
    <Container>
      <Title>Оставить заявку</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Фамилия, имя и отчество*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={handleEmailChange}
          onFocus={handleFocus}
          onBlur={handleEmailBlur}
          $error={!!emailError && emailTouched}
          required
        />
        {emailError && emailTouched && (
          <ErrorMessage>{emailError}</ErrorMessage>
        )}

        <TextArea
          placeholder="Сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
        />

        <ButtonBlock>
          <SubmitButton
            $show={dispatched}
            type="submit"
            disabled={isSubmitDisabled}
          >
            {dispatched ? "Заявка отправлена!" : "Отправить данные"}
          </SubmitButton>

          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            label="Согласен на обработку данных"
          />
        </ButtonBlock>
      </form>
    </Container>
  );
};

export default Form;
