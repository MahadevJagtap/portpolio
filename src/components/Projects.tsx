import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';



const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-gray-600 dark:text-white/70">Projects</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >

          <ProjectCard
            title="VTU Notes For All"
            description="Centralized academic hub serving 30K+ VTU students with 100K+ views and 42K+ downloads. Features notes, papers, SGPA/CGPA calculators, and ranks in Top 3 on Google."
            image="/vtunotes.png"
            tags={['React', 'Firebase', 'Netlify', 'SEO']}
            githubUrl="https://github.com/MahadevJagtap/vtunotes"
            liveUrl="https://vtunotesforall.in"
          />

          <ProjectCard
            title="ITRPlus Website"
            description="A Full-Stack SaaS platform for simplified ITR filing with calculators, validations, and guided workflows. Features secure document uploads and Firebase authentication."
            image="/itrplus.png"
            tags={['React.js', 'Node.js', 'Firebase', 'Netlify']}
            githubUrl="https://github.com/MahadevJagtap/ITRPLUS-WEBSITE"
            liveUrl="https://itrplus.netlify.app/"
          />

          <ProjectCard
            title="Food Demand Predictor"
            description="Predictive Analytics Application using machine learning models to provide data-driven recommendations for restaurants and canteens."
            image="/canteen.png"
            tags={['Python', 'Machine Learning', 'Streamlit', 'Pandas']}
            githubUrl="https://github.com/MahadevJagtap/Food-Demand-Prediction"
            liveUrl="https://food-demand-prediction-1.onrender.com/"
          />

        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}) => (
  <motion.div
    className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden group border border-gray-200/20 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative h-48">
      <LazyImage
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 dark:from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-white/70 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100/50 dark:bg-white/10 text-sm rounded-full text-gray-700 dark:text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Github size={20} />
          Code
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ExternalLink size={20} />
          Live
        </a>
      </div>
    </div>
  </motion.div>
);

export default Projects;