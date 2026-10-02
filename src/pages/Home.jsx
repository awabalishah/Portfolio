import VslHero from '../components/VslHero';
import Results from '../components/Results';
import Experience from '../components/Experience';
import ResultsGallery from '../components/ResultsGallery';
import Expertise from '../components/Expertise';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <VslHero />
            <Results />
            <Experience />
            <ResultsGallery />
            <Expertise />
            <FaqSection />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Home;
