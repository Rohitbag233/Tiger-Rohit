import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Target, Rocket } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Home = () => {
  const [statsRef, statsVisible] = useScrollReveal({ once: true })
  const [valuesRef, valuesVisible] = useScrollReveal({ once: true })
  const [featuresRef, featuresVisible] = useScrollReveal({ once: true })

  const stats = [
    { number: '2', label: 'Companies Founded' },
    { number: '200+', label: 'Day Vlog Challenge' },
    { number: '1M', label: 'Subscriber Goal' },
    { number: 'SIP', label: 'Investment Strategy' },
  ]

  const values = ['Innovation', 'Kindness', 'Obsession', 'Legacy']

  const features = [
    {
      icon: <Target size={32} />,
      title: 'Vision',
      description: 'Building toward Type 1 civilization',
      link: '/vision',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Projects',
      description: 'Reach Resolve, Resolvia, Cooper & more',
      link: '/projects',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'YouTube',
      description: 'Documenting the real startup journey',
      link: '/youtube',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url(https://vip-go.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/shutterstock_407554567.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Rohit <span className="text-[var(--primary-color)]">Bag</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-[var(--text-secondary)]">
              Building for people, not just metrics.
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
              Creator • Founder • Builder — Mumbai. Obsessed with making ideas that scale and give people real opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">
                Work with me
              </Link>
              <Link to="/youtube" className="btn btn-secondary">
                Watch the Grind
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="fixed bottom-8 right-8 hidden md:flex flex-col gap-4 z-30">
          <a
            href="https://twitter.com/@Rohitbag233"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--primary-color)] transition-colors"
          >
            <img src="/rohitbag233/rohitbag233/img/twitter.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/rohitbag233"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[var(--bg-secondary)] hover:bg-[var(--primary-color)] transition-colors"
          >
            <img src="/rohitbag233/rohitbag233/img/instagram.png" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Rohit</h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              I'm Rohit Bag — a founder from Mumbai on a mission to uplift people financially, unite humanity, and push Earth toward Type 1 civilization. I build products, teams, and stories that make progress contagious.
            </p>
          </motion.div>

          {/* Stats */}
          <div
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 reveal ${
              statsVisible ? 'visible' : ''
            }`}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-2">
                  {stat.number}
                </h3>
                <p className="text-[var(--text-secondary)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <div
            ref={valuesRef}
            className={`text-center mb-16 reveal ${valuesVisible ? 'visible' : ''}`}
          >
            <h3 className="text-2xl font-semibold mb-6">What I Stand For</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {values.map((value, index) => (
                <motion.span
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={valuesVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full text-[var(--text-primary)] hover:border-[var(--primary-color)] transition-colors"
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div
            ref={featuresRef}
            className={`grid md:grid-cols-3 gap-8 reveal ${featuresVisible ? 'visible' : ''}`}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="card text-center group"
              >
                <div className="flex justify-center mb-4 text-[var(--primary-color)]">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-[var(--text-secondary)] mb-4">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to join the journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Follow along as I build companies that scale human opportunity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/story" className="btn bg-white text-[var(--primary-color)] hover:bg-opacity-90">
                Read My Story
              </Link>
              <Link to="/advice-museum" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-[var(--primary-color)]">
                Share Your Advice
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
