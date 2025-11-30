import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        className="container max-w-5xl mx-auto px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-9xl font-medium tracking-tighter leading-[0.85] mb-12"
        >
          I'm Awab Ali Shah,<br />
          <span className="text-gray-500">a UX Designer</span><br />
          based in Pakistan.
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-8 md:items-center text-lg text-gray-400"
        >
          <p className="max-w-md">
            I craft intuitive digital experiences that blend aesthetics with functionality.
          </p>
          <motion.div
            className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-sm font-medium text-white">Available for new projects</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
