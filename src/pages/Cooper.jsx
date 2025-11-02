import { motion } from 'framer-motion'
import { Sparkles, Rocket, BarChart, Users } from 'lucide-react'

const Cooper = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--primary-color)]">Cooper</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-8">
            AI that builds your entire business - from idea validation to automated operations. Making entrepreneurship accessible to millions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary">
              Join Waitlist
            </button>
            <button className="btn btn-secondary">
              Learn More
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { icon: <Sparkles size={32} />, title: 'Idea Validation', desc: 'AI helps you find and validate startup ideas' },
            { icon: <Rocket size={32} />, title: 'Auto Website', desc: 'Generates a complete website for your business' },
            { icon: <BarChart size={32} />, title: 'Marketing Automation', desc: 'Built-in AI agents handle your marketing' },
            { icon: <Users size={32} />, title: 'Scale Operations', desc: 'Automates workflows to help you grow' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card text-center"
            >
              <div className="flex justify-center text-[var(--primary-color)] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-[var(--text-secondary)]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cooper
