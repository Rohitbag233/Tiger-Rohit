import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const Blog = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <BookOpen className="mx-auto mb-6 text-[var(--primary-color)]" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--primary-color)]">Blog</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-8">
            Thoughts on entrepreneurship, building products, and pushing toward Type 1 civilization.
          </p>
          <p className="text-[var(--text-secondary)]">
            Blog posts coming soon. Follow me on social media for updates.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
