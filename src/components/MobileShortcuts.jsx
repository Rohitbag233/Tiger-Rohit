import { Mail, MessageCircle, Youtube, Phone } from 'lucide-react'

const MobileShortcuts = () => {
  const shortcuts = [
    {
      icon: <Phone size={20} />,
      label: 'Call',
      action: () => window.open('tel:+919876543210'), // Update with real phone if available
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      action: () => window.location.href = 'mailto:rohitbag233@gmail.com',
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'DM',
      action: () => window.open('https://instagram.com/rohitbag233', '_blank'),
    },
    {
      icon: <Youtube size={20} />,
      label: 'Subscribe',
      action: () => window.open('https://youtube.com/@TigerRohit?sub_confirmation=1', '_blank'),
    },
  ]

  return (
    <div className="mobile-shortcuts">
      {shortcuts.map((shortcut, index) => (
        <button
          key={index}
          onClick={shortcut.action}
          className="mobile-shortcut-btn"
          aria-label={shortcut.label}
        >
          {shortcut.icon}
          <span>{shortcut.label}</span>
        </button>
      ))}
    </div>
  )
}

export default MobileShortcuts
