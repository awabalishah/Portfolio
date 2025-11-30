import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container max-w-5xl mx-auto px-8">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl font-medium">Selected Work</h2>
                    <span className="text-gray-500 hidden md:block">2022 - 2024</span>
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <Link to={`/project/${project.id}`} className="group cursor-pointer block">
                                <motion.div
                                    className="aspect-[4/3] overflow-hidden bg-zinc-900 mb-6 rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <img
                                        src={project.heroImage}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </motion.div>
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl font-medium group-hover:text-gray-300 transition-colors mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm">{project.funding}</p>
                                    </div>
                                    <span className="text-gray-500 text-sm border border-gray-800 px-3 py-1 rounded-full whitespace-nowrap group-hover:border-gray-600 transition-colors">
                                        {project.category}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
