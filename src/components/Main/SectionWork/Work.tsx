import styled from "styled-components";
import { Container } from "../../Container";
import TextTitle from "../../TextTitle";
import WorkContent from "./WorkContent.tsx";


const SectionWork = styled(Container).attrs({ as: "section" })`
    padding-top: 100px;
`;

const Work: React.FC = () => {    
    return (
        <SectionWork>
            <TextTitle
                title="Как мы работаем"                
            />
            <WorkContent />
        </SectionWork>
    );
};

export default Work;