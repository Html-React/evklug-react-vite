import styled from "styled-components";
import { Container } from "../../Container";
import TextAbout from "../SectionAbout/TextAbout";


const SectionWork = styled(Container).attrs({ as: "section" })`
    padding-top: 100px;
`;

const Work: React.FC = () => {    
    return (
        <SectionWork>
            <TextAbout
                title="Как мы работаем"                
            />  
        </SectionWork>
    );
};

export default Work;