import Hero from '../components/Hero';
import Results from '../components/Results';

import Services from '../components/Services';
import Process from '../components/Process';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <Results />

            <Services />
            <Process />
            <Skills />
            <Footer />
        </>
    );
};

export default Home;
