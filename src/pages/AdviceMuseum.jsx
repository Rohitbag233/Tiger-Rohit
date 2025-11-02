import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../services/supabase'
import { Heart, Send, Loader, CheckCircle } from 'lucide-react'

const AdviceMuseum = () => {
  const [advices, setAdvices] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    advice_text: '',
    author_name: '',
    author_context: '',
  })

  useEffect(() => {
    fetchAdvices()
  }, [])

  const fetchAdvices = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('advice_entries')
        .select('*')
        .eq('is_approved', true)
        .order('approved_at', { ascending: false })

      if (error) throw error
      setAdvices(data || [])
    } catch (err) {
      console.error('Error fetching advices:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const { error } = await supabase
        .from('advice_entries')
        .insert([{
          advice_text: formData.advice_text,
          author_name: formData.author_name,
          author_context: formData.author_context || null,
        }])

      if (error) throw error

      setSubmitted(true)
      setFormData({ advice_text: '', author_name: '', author_context: '' })

      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error('Error submitting advice:', err)
      alert('Failed to submit advice. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="text-[var(--primary-color)]">Advice Museum</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            A collective wall of life wisdom. Share one piece of advice that changed your perspective or helped you through tough times.
          </p>
        </motion.div>

        {/* Submit Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Heart className="text-[var(--primary-color)]" size={28} />
              Share Your Advice
            </h2>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="mx-auto mb-4 text-green-500" size={64} />
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-[var(--text-secondary)]">
                  Your advice has been submitted and will appear after approval.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="advice_text" className="block mb-2 font-medium">
                    Your Advice *
                  </label>
                  <textarea
                    id="advice_text"
                    name="advice_text"
                    value={formData.advice_text}
                    onChange={handleChange}
                    placeholder="Share a piece of wisdom that made a difference..."
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="author_name" className="block mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="author_name"
                    name="author_name"
                    value={formData.author_name}
                    onChange={handleChange}
                    placeholder="How should we credit you?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="author_context" className="block mb-2 font-medium">
                    Context (Optional)
                  </label>
                  <input
                    type="text"
                    id="author_context"
                    name="author_context"
                    value={formData.author_context}
                    onChange={handleChange}
                    placeholder="E.g., Entrepreneur, Student, Teacher..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Submit Advice
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Advice Wall */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">The Wall of Wisdom</h2>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader className="animate-spin" size={48} />
            </div>
          ) : advices.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-[var(--text-secondary)]">
                Be the first to share your wisdom!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advices.map((advice, index) => (
                <AdviceCard key={advice.id} advice={advice} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const AdviceCard = ({ advice, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group hover:scale-105"
    >
      <div className="mb-4">
        <Heart className="text-[var(--primary-color)] mb-2" size={24} />
        <p className="text-[var(--text-primary)] leading-relaxed italic">
          "{advice.advice_text}"
        </p>
      </div>
      <div className="border-t border-[var(--border-color)] pt-4">
        <p className="font-semibold text-[var(--text-primary)]">— {advice.author_name}</p>
        {advice.author_context && (
          <p className="text-sm text-[var(--text-secondary)] mt-1">{advice.author_context}</p>
        )}
      </div>
    </motion.div>
  )
}

export default AdviceMuseum
