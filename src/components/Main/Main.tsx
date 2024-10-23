import About from "./SectionAbout/About";
import SectionSlider from "./SectionSlider/SectionSlider";
import Work from "./SectionWork/Work";
import Questionsk from "./SectionQuestions/Questions";

const Main = () => {
    return (
        <main>
            <SectionSlider />
            <About />
            <Work />
            <Questionsk />
        </main>
    );
};

export default Main;


