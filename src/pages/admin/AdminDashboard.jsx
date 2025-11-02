import { Link } from 'react-router-dom'
import { LayoutDashboard, FileText, MessageSquare, Users, BookOpen, Settings, Heart } from 'lucide-react'

const AdminDashboard = () => {
  const sections = [
    { icon: <FileText size={32} />, title: 'Life Story', desc: 'Edit story sections', link: '/admin/story' },
    { icon: <Heart size={32} />, title: 'Advice Museum', desc: 'Approve advice entries', link: '/admin/advice' },
    { icon: <BookOpen size={32} />, title: 'Blog Posts', desc: 'Manage blog content', link: '/admin/blog' },
    { icon: <LayoutDashboard size={32} />, title: 'Projects', desc: 'Update projects', link: '/admin/projects' },
    { icon: <Users size={32} />, title: 'Team', desc: 'Manage team members', link: '/admin/team' },
    { icon: <MessageSquare size={32} />, title: 'Messages', desc: 'View contact messages', link: '/admin/messages' },
    { icon: <Settings size={32} />, title: 'Settings', desc: 'Site configuration', link: '/admin/settings' },
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.link}
              className="card hover:border-[var(--primary-color)] transition-all"
            >
              <div className="text-[var(--primary-color)] mb-4">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{section.title}</h3>
              <p className="text-[var(--text-secondary)]">{section.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
