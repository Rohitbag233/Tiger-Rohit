import { icon } from '../utils/icons.js';
import { getSupabase, isSupabaseConfigured } from '../services/supabase.js';

let advices = [];
let loading = true;

export function renderAdminAdvice() {
  return `
    <div class="pt-24 pb-20">
      <div class="container">
        <h1 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 32px;">
          Advice Museum - Admin
        </h1>

        <div id="advice-list">
          ${renderAdviceList()}
        </div>
      </div>
    </div>
  `;
}

function renderAdviceList() {
  if (loading) {
    return `
      <div class="flex justify-center items-center" style="min-height: 50vh;">
        <div class="loading-spinner"></div>
      </div>
    `;
  }

  if (!isSupabaseConfigured()) {
    return `
      <div class="card text-center" style="padding: 48px;">
        <p style="font-size: 1.25rem; color: var(--text-secondary);">
          Database not configured. Please set up Supabase to manage advice entries.
        </p>
      </div>
    `;
  }

  if (advices.length === 0) {
    return `
      <div class="card text-center" style="padding: 48px;">
        <p style="font-size: 1.25rem; color: var(--text-secondary);">
          No advice entries yet.
        </p>
      </div>
    `;
  }

  return `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      ${advices.map(advice => `
        <div class="advice-item">
          <div style="display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 250px;">
              <p style="font-size: 1.125rem; margin-bottom: 8px;">"${advice.advice_text}"</p>
              <p style="font-size: 0.875rem; color: var(--text-secondary);">
                — ${advice.author_name}
                ${advice.author_context ? ` (${advice.author_context})` : ''}
              </p>
              <p style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 8px;">
                ${new Date(advice.submitted_at).toLocaleString()}
              </p>
            </div>

            <div class="advice-actions">
              ${!advice.is_approved ? `
                <button
                  class="approve-btn"
                  onclick="window.approveAdvice('${advice.id}')"
                  title="Approve"
                >
                  ${icon('check', 20)}
                  Approve
                </button>
                <button
                  class="reject-btn"
                  onclick="window.rejectAdvice('${advice.id}')"
                  title="Reject"
                >
                  ${icon('x', 20)}
                  Reject
                </button>
              ` : `
                <span class="approved-badge">Approved</span>
              `}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export async function initAdminAdvice() {
  const main = document.getElementById('main-content');
  main.innerHTML = renderAdminAdvice();
  
  // Fetch advices
  await fetchAdvices();

  // Expose approve/reject functions to window for onclick handlers
  window.approveAdvice = approveAdvice;
  window.rejectAdvice = rejectAdvice;
}

async function fetchAdvices() {
  if (!isSupabaseConfigured()) {
    loading = false;
    updateAdviceList();
    return;
  }

  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('advice_entries')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (error) throw error;
    
    advices = data || [];
  } catch (err) {
    console.error('Error fetching advices:', err);
    advices = [];
  } finally {
    loading = false;
    updateAdviceList();
  }
}

async function approveAdvice(id) {
  if (!isSupabaseConfigured()) {
    alert('Database not configured');
    return;
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase
      .from('advice_entries')
      .update({ is_approved: true, approved_at: new Date().toISOString() })
      .eq('id', id);

    if (error) throw error;
    
    // Refresh list
    loading = true;
    updateAdviceList();
    await fetchAdvices();
  } catch (err) {
    console.error('Error approving advice:', err);
    alert('Failed to approve advice. Please try again.');
  }
}

async function rejectAdvice(id) {
  if (!confirm('Delete this advice entry?')) return;

  if (!isSupabaseConfigured()) {
    alert('Database not configured');
    return;
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase
      .from('advice_entries')
      .delete()
      .eq('id', id);

    if (error) throw error;
    
    // Refresh list
    loading = true;
    updateAdviceList();
    await fetchAdvices();
  } catch (err) {
    console.error('Error rejecting advice:', err);
    alert('Failed to reject advice. Please try again.');
  }
}

function updateAdviceList() {
  const list = document.getElementById('advice-list');
  if (list) {
    list.innerHTML = renderAdviceList();
  }
}
