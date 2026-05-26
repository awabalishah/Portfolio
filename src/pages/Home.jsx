import Hero from '../components/Hero';
import Results from '../components/Results';
import RoiCalculator from '../components/RoiCalculator';
import Services from '../components/Services';
import Process from '../components/Process';
import Skills from '../components/Skills';
import FaqSection from '../components/FaqSection';
import InlineAuditForm from '../components/InlineAuditForm';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <Results />
            <RoiCalculator />
            <Services />
            <Process />
            <Skills />
            <FaqSection />
            <InlineAuditForm />
            <Footer />
        </>
    );
};

export default Home;
