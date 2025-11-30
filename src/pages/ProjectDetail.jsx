import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-medium mb-4">Project not found</h1>
                    <Link to="/" className="text-blue-500 hover:text-blue-400">
                        ← Back to home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#050505] min-h-screen text-[#f3f3f3]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center pt-32 pb-20">
                <div className="container max-w-6xl mx-auto px-8">
                    {/* Back Button */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-8">
                            <span className="text-sm text-gray-500 uppercase tracking-wider">{project.category}</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-8">
                            {project.title}
                        </h1>
                        <p className="text-2xl text-gray-400 max-w-3xl mb-12">
                            {project.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-16">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="px-4 py-2 bg-zinc-800 rounded-full text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="aspect-video overflow-hidden rounded-2xl"
                    >
                        <img
                            src={project.heroImage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container max-w-4xl mx-auto px-8">
                    <div className="grid md:grid-cols-3 gap-12 mb-20">
                        <div>
                            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Year</h3>
                            <p className="text-xl">{project.year}</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Funding</h3>
                            <p className="text-xl">{project.funding}</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Role</h3>
                            <p className="text-xl">Lead Designer</p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-medium mb-6">Overview</h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {project.overview}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="section bg-zinc-900/20">
                <div className="container max-w-4xl mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-medium mb-6">The Challenge</h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {project.challenge}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="section">
                <div className="container max-w-4xl mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-medium mb-6">The Solution</h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {project.solution}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="section bg-zinc-900/20">
                <div className="container max-w-6xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {project.gallery.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="aspect-video overflow-hidden rounded-xl"
                            >
                                <img
                                    src={image}
                                    alt={`${project.title} ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="section">
                <div className="container max-w-4xl mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-medium mb-12">Results & Impact</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {project.results.map((result, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                    <p className="text-lg text-gray-300">{result}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Next Project CTA */}
            <section className="section py-32 text-center border-t border-white/10">
                <div className="container">
                    <Link
                        to="/#work"
                        className="inline-block px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                    >
                        View All Projects
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
