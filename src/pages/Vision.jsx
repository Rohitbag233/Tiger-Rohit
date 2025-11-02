import { motion } from 'framer-motion'
import { Rocket, Globe, Users, Zap } from 'lucide-react'

const Vision = () => {
  const goals = [
    {
      icon: <Globe size={48} />,
      title: 'Type 1 Civilization',
      description: 'My mission is to push Earth toward becoming a Type 1 civilization before I die - harnessing all the energy available on our planet.',
    },
    {
      icon: <Users size={48} />,
      title: 'Financial Freedom for All',
      description: 'Building tools and businesses that give people real opportunities to become self-sufficient, not just temporarily helped.',
    },
    {
      icon: <Rocket size={48} />,
      title: 'Scale Human Opportunity',
      description: 'Creating products that scale access to opportunity, making it possible for millions to build their own path.',
    },
    {
      icon: <Zap size={48} />,
      title: 'Unite Humanity',
      description: 'Working toward a future where humanity comes together to solve collective challenges and reach our full potential.',
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
            My <span className="text-[var(--primary-color)]">Vision</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            A world where every person has the opportunity to become self-sufficient, where humanity works together, and where we push toward becoming a Type 1 civilization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card text-center"
            >
              <div className="flex justify-center text-[var(--primary-color)] mb-4">
                {goal.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{goal.title}</h3>
              <p className="text-[var(--text-secondary)]">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Vision
