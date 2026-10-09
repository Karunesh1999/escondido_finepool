import React from 'react'
import { TopBar } from './TopBar'
import { Navbar } from './Navbar'

interface HeaderProps {
  onOpenSearch?: () => void
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all">
      <TopBar />
      <Navbar onOpenSearch={onOpenSearch} />
    </header>
  )
}
