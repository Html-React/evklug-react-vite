import styled from "styled-components";

const Container = styled.div`
  width: 363px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color: var(--color-PastelGray);
  padding-top: 87px;
`;


const FooterContent = () => { 

    return  (
      <Container>        
            <Text>
            Высокий уровень вовлечения представителей целевой аудитории является
            чётким доказательством простого факта: разбавленное изрядной долей
            эмпатии, рациональное мышление позволяет оценить значение модели
            развития. Таким образом, консультация с широким активом обеспечивает
            широкому кругу (специалистов) участие в формировании стандартных
            подходов.
            </Text>
      </Container>
    );
};

export default FooterContent;