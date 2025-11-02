import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import MobileShortcuts from './components/MobileShortcuts'

// Pages
import Home from './pages/Home'
import Story from './pages/Story'
import Vision from './pages/Vision'
import Projects from './pages/Projects'
import Cooper from './pages/Cooper'
import YouTubePage from './pages/YouTube'
import Blog from './pages/Blog'
import AdviceMuseum from './pages/AdviceMuseum'
import Team from './pages/Team'
import Contact from './pages/Contact'

// Admin
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminAdvice from './pages/admin/AdminAdvice'

import './styles/index.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          
          <Navigation />
          
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<Story />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/cooper" element={<Cooper />} />
              <Route path="/youtube" element={<YouTubePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/advice-museum" element={<AdviceMuseum />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/advice" element={<AdminAdvice />} />
              {/* Add more admin routes as needed */}
            </Routes>
          </main>
          
          <Footer />
          <MobileShortcuts />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
