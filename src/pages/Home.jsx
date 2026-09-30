import VslHero from '../components/VslHero';
import Results from '../components/Results';
import ResultsGallery from '../components/ResultsGallery';
import Expertise from '../components/Expertise';
import TestimonialsSlider from '../components/TestimonialsSlider';
import BookingSection from '../components/BookingSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <VslHero />
            <Results />
            <ResultsGallery />
            <Expertise />
            <TestimonialsSlider />
            <BookingSection />
            <FaqSection />
            <Footer />
        </>
    );
};

export default Home;
