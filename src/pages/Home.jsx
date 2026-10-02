import VslHero from '../components/VslHero';
import Results from '../components/Results';
import ResultsGallery from '../components/ResultsGallery';
import Expertise from '../components/Expertise';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <VslHero />
            <Results />
            <ResultsGallery />
            <Expertise />
            <FaqSection />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Home;
