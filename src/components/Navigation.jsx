import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Eye } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme, accessibility, toggleAccessibility } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Story', path: '/story' },
    { name: 'Vision', path: '/vision' },
    { name: 'Projects', path: '/projects' },
    { name: 'Cooper', path: '/cooper' },
    { name: 'YouTube', path: '/youtube' },
    { name: 'Blog', path: '/blog' },
    { name: 'Advice Museum', path: '/advice-museum' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-opacity-95 backdrop-blur-md shadow-lg' : 'bg-opacity-0'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--bg-secondary)' : 'transparent',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/rohitbag233/rohitbag233/img/TigerRohitLOGO.png"
              alt="Rohit Bag Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold hidden sm:inline">Rohit Bag</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[var(--primary-color)] ${
                  isActive(link.path)
                    ? 'text-[var(--primary-color)]'
                    : 'text-[var(--text-secondary)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Theme & Accessibility Toggles */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--border-color)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleAccessibility}
              className={`p-2 rounded-full transition-colors ${
                accessibility
                  ? 'bg-[var(--primary-color)] text-white'
                  : 'hover:bg-[var(--border-color)]'
              }`}
              aria-label="Toggle accessibility mode"
            >
              <Eye size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-[var(--border-color)] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--border-color)]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-[var(--primary-color)] ${
                    isActive(link.path)
                      ? 'text-[var(--primary-color)]'
                      : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
