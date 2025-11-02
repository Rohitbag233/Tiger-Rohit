import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'dark'
    return localStorage.getItem('theme') || 'dark'
  })

  const [accessibility, setAccessibility] = useState(() => {
    return localStorage.getItem('accessibility') === 'true'
  })

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // Apply accessibility mode
    if (accessibility) {
      document.documentElement.classList.add('accessibility-mode')
    } else {
      document.documentElement.classList.remove('accessibility-mode')
    }
    localStorage.setItem('accessibility', accessibility)
  }, [accessibility])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const toggleAccessibility = () => {
    setAccessibility(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accessibility, toggleAccessibility }}>
      {children}
    </ThemeContext.Provider>
  )
}
