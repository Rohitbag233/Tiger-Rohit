import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../services/supabase'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Loader } from 'lucide-react'

const Story = () => {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStory()
  }, [])

  const fetchStory = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('life_story_sections')
        .select('*')
        .eq('is_published', true)
        .order('order_index', { ascending: true })

      if (error) throw error
      setSections(data || [])
    } catch (err) {
      console.error('Error fetching story:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin" size={48} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error loading story</h2>
          <p className="text-[var(--text-secondary)]">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-[var(--primary-color)]">Story</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            From a curious kid in 4th standard to building companies that scale human opportunity — this is my journey of betrayals, breakthroughs, and building toward Type 1 civilization.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <StorySection key={section.id} section={section} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4">This is just the beginning</h3>
          <p className="text-[var(--text-secondary)] mb-6">
            Follow my journey as I continue building products that give people real opportunity to become self-sufficient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com/@TigerRohit?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Subscribe on YouTube
            </a>
            <a
              href="https://instagram.com/rohitbag233"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Follow on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const StorySection = ({ section, index }) => {
  const [ref, isVisible] = useScrollReveal({ once: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      {/* Timeline line */}
      <div
        className={`hidden md:block absolute top-0 ${
          index % 2 === 0 ? 'left-1/2' : 'right-1/2'
        } w-px h-full bg-[var(--border-color)]`}
      />

      {/* Timeline dot */}
      <div
        className={`hidden md:flex absolute top-8 ${
          index % 2 === 0 ? 'left-1/2' : 'right-1/2'
        } -translate-x-1/2 w-4 h-4 bg-[var(--primary-color)] rounded-full ring-4 ring-[var(--bg-primary)]`}
      />

      {/* Content */}
      <div
        className={`md:w-1/2 ${
          index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'
        }`}
      >
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-mono text-[var(--primary-color)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 h-px bg-[var(--border-color)]" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
            {section.content}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Story
