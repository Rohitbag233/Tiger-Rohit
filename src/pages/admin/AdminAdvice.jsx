import { useState, useEffect } from 'react'
import { supabase } from '../../services/supabase'
import { Check, X, Loader } from 'lucide-react'

const AdminAdvice = () => {
  const [advices, setAdvices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAdvices()
  }, [])

  const fetchAdvices = async () => {
    try {
      const { data, error } = await supabase
        .from('advice_entries')
        .select('*')
        .order('submitted_at', { ascending: false })

      if (error) throw error
      setAdvices(data || [])
    } catch (err) {
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (id) => {
    try {
      const { error } = await supabase
        .from('advice_entries')
        .update({ is_approved: true, approved_at: new Date().toISOString() })
        .eq('id', id)

      if (error) throw error
      fetchAdvices()
    } catch (err) {
      console.error('Error:', err)
    }
  }

  const handleReject = async (id) => {
    if (!confirm('Delete this advice entry?')) return

    try {
      const { error } = await supabase
        .from('advice_entries')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchAdvices()
    } catch (err) {
      console.error('Error:', err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin" size={48} />
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Advice Museum - Admin</h1>

        <div className="space-y-4">
          {advices.map((advice) => (
            <div key={advice.id} className="card">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-lg mb-2">"{advice.advice_text}"</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    — {advice.author_name}
                    {advice.author_context && ` (${advice.author_context})`}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] mt-2">
                    {new Date(advice.submitted_at).toLocaleString()}
                  </p>
                </div>

                <div className="flex gap-2">
                  {!advice.is_approved ? (
                    <>
                      <button
                        onClick={() => handleApprove(advice.id)}
                        className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
                        title="Approve"
                      >
                        <Check size={20} />
                      </button>
                      <button
                        onClick={() => handleReject(advice.id)}
                        className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                        title="Reject"
                      >
                        <X size={20} />
                      </button>
                    </>
                  ) : (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded">
                      Approved
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {advices.length === 0 && (
            <p className="text-center text-[var(--text-secondary)] py-8">
              No advice entries yet.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminAdvice
