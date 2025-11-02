import { Link } from 'react-router-dom'
import { Twitter, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <Twitter size={20} />, url: 'https://twitter.com/@Rohitbag233', label: 'Twitter' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com/rohitbag233', label: 'Instagram' },
    { icon: <Youtube size={20} />, url: 'https://youtube.com/@TigerRohit', label: 'YouTube' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/rohitbag233', label: 'LinkedIn' },
  ]

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Story', path: '/story' },
    { name: 'Vision', path: '/vision' },
    { name: 'Projects', path: '/projects' },
    { name: 'Cooper', path: '/cooper' },
    { name: 'YouTube', path: '/youtube' },
    { name: 'Blog', path: '/blog' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4">
                <img
                  src="/rohitbag233/rohitbag233/img/TigerRohitLOGO.png"
                  alt="Rohit Bag"
                  className="w-12 h-12"
                />
                <span className="text-xl font-bold">Rohit Bag</span>
              </Link>
              <p className="text-[var(--text-secondary)] mb-4">
                Building for people, not just metrics. On a mission to push Earth toward Type 1 civilization.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-[var(--border-color)] transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Get updates on my journey, new projects, and insights.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  // Handle newsletter subscription
                  alert('Newsletter feature coming soon!')
                }}
                className="flex flex-col gap-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)]"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] mt-12 pt-8 text-center text-[var(--text-secondary)]">
            <p>
              © {new Date().getFullYear()} Rohit Bag. Built with 💙 and ambition.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 p-3 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  )
}

export default Footer
