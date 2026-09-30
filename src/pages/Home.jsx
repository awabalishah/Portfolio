import VslHero from '../components/VslHero';
import Results from '../components/Results';
import ResultsSlider from '../components/ResultsSlider';
import BookingSection from '../components/BookingSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <VslHero />
            <Results />
            <ResultsSlider />
            <BookingSection />
            <FaqSection />
            <Footer />
        </>
    );
};

export default Home;
