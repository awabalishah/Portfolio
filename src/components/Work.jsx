import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../data/projects';

const ProjectCard = ({ project, index, total }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start start"]
    });

    return (
        <div
            ref={cardRef}
            className="sticky top-24 md:top-32 mb-8 md:mb-12"
            style={{
                zIndex: index + 1,
            }}
        >
            <motion.div
                className="relative overflow-hidden rounded-3xl shadow-xl border border-white/5"
                style={{
                    backgroundColor: project.color,
                    minHeight: "500px",
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Link to={`/project/${project.id}`} className="block h-full w-full p-8 md:p-12 group">
                    <div className="grid md:grid-cols-2 gap-8 h-full items-center">
                        {/* Content Side */}
                        <div className="flex flex-col justify-between h-full order-2 md:order-1">
                            <div>
                                <h3 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                                    {project.subtitle}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-gray-200 border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all duration-300">
                                <span>View Project</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden order-1 md:order-2 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                            <img
                                src={project.heroImage}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
};

const Work = () => {
    return (
        <section id="work" className="section py-24">
            <div className="container max-w-4xl mx-auto px-6 md:px-8">
                <div className="flex justify-center items-end mb-20">
                    <h2 className="text-4xl md:text-5xl font-medium text-center">Selected Work</h2>
                </div>

                <div className="flex flex-col gap-8 md:gap-12 pb-24">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            total={projects.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
