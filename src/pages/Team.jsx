import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'

const Team = () => {
  const team = [
    {
      name: 'Rohit Bag',
      role: 'Founder & CEO',
      bio: 'Visionary founder obsessed with building products that scale human opportunity. On a mission to push Earth toward Type 1 civilization.',
      image: '/rohitbag233/rohitbag233/img/TigerRohitLOGO.png',
    },
    {
      name: 'Dynamic',
      role: 'Co-Founder & COO',
      bio: 'Operational mastermind and trusted partner who shares the vision of making meaningful impact through technology and entrepreneurship.',
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
            The <span className="text-[var(--primary-color)]">Team</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Building the future together - a small but mighty team with massive ambitions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card text-center"
            >
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
              )}
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-[var(--primary-color)] font-medium mb-4">{member.role}</p>
              <p className="text-[var(--text-secondary)] mb-4">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
