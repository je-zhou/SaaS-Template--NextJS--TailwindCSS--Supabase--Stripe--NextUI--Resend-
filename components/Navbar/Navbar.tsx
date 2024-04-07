import React from 'react'
import AuthButton from './AuthButton'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <ThemeSwitcher/>
        <AuthButton />
      </div>
    </nav>
  )
}
