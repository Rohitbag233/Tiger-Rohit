import { motion } from 'framer-motion'
import { Youtube, TrendingUp } from 'lucide-react'

const YouTubePage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Youtube className="mx-auto mb-6 text-red-500" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Watch the <span className="text-[var(--primary-color)]">Grind</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-8">
            Documenting the real startup journey. Raw, unfiltered, and authentic. From 78 to 1,024 subscribers in 11 days. Goal: 1M subscribers.
          </p>
          <a
            href="https://youtube.com/@TigerRohit?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Youtube size={20} />
            Subscribe Now
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <TrendingUp className="text-[var(--primary-color)] mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3">200+ Day Challenge</h3>
            <p className="text-[var(--text-secondary)]">
              Daily vlogs documenting my journey building companies, learning, and growing. Transparent and real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card"
          >
            <Youtube className="text-[var(--primary-color)] mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3">Startup Journey</h3>
            <p className="text-[var(--text-secondary)]">
              Behind-the-scenes of building Resolvia, Reach Resolve, and Cooper. The wins, losses, and everything between.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default YouTubePage
