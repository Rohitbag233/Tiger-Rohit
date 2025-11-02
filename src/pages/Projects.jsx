import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Cooper',
      description: 'AI-powered platform that helps people find startup ideas, generates websites, adds marketing agents, and automates business operations.',
      status: 'In Development',
      tags: ['AI', 'SaaS', 'Automation'],
      link: '/cooper',
    },
    {
      title: 'Resolvia',
      description: 'AI automation agency helping businesses automate workflows and scale operations using cutting-edge AI technology.',
      status: 'Active',
      tags: ['AI', 'Automation', 'Agency'],
    },
    {
      title: 'Reach Resolve',
      description: 'Video editing agency that has served international clients since June 2024, generating $1,500+ in revenue.',
      status: 'Active',
      tags: ['Video Editing', 'Agency', 'Creative'],
    },
    {
      title: 'Hyperloop Technology',
      description: 'Revolutionary transportation concept capable of 3,200 km/h with 1/10th maintenance and 1/100th operational cost.',
      status: 'Archived',
      tags: ['Transportation', 'Innovation', 'Research'],
    },
    {
      title: 'Biology of Fuel',
      description: 'Process to convert waste plastic into petrol - successfully created 100ml from 5kg of waste.',
      status: 'Archived',
      tags: ['Environment', 'Innovation', 'Research'],
    },
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-[var(--primary-color)]">Projects</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            From AI automation to revolutionary transportation - building products that scale human opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                  project.status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:gap-3 transition-all"
                >
                  Learn More <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
