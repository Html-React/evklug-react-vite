import styled from "styled-components";
import { Container } from "../../Container";
import TextTitle from "../../TextTitle";


const SectionQuestions = styled(Container).attrs({ as: "section" })`
    padding-top: 100px;
`;

const Questionsk: React.FC = () => {        
    return (
        <SectionQuestions>
            <TextTitle
                title="Часто задаваемые вопросы"                
            />            
        </SectionQuestions>
    );
};

export default Questionsk;