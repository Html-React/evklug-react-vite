import About from "./SectionAbout/About";
import SectionSlider from "./SectionSlider/SectionSlider";
import Work from "./SectionWork/Work";
import Questions from "./SectionQuestions/Questions";

const Main = () => {
    return (
        <main>
            <SectionSlider />
            <About />
            <Work />
            <Questions />
        </main>
    );
};

export default Main;


