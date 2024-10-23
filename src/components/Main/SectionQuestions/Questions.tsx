import styled from "styled-components";
import { Container } from "../../Container";
import TextTitle from "../../TextTitle";
import FAQ from "./test";


const SectionQuestions = styled(Container).attrs({ as: "section" })`
    padding-top: 100px;
`;

const Questions: React.FC = () => {        
    return (
        <SectionQuestions>
            <TextTitle
                title="Часто задаваемые вопросы"                
            />
           <FAQ />
        </SectionQuestions>
    );
};

export default Questions;