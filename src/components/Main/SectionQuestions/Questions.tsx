import styled from "styled-components";
import { Container } from "../../Container";
import TextTitle from "../../TextTitle";
import QuestionsContent from "./QuestionsContent";


const SectionQuestions = styled(Container).attrs({ as: "section" })`
    padding-top: 100px;
`;

const QuestionsTitle = styled(TextTitle)`
    margin-bottom: 32px;
`;


const Questions: React.FC = () => {        
    return (
      <SectionQuestions>
        <QuestionsTitle title="Часто задаваемые вопросы" />
        <QuestionsContent />
      </SectionQuestions>
    );
};

export default Questions;