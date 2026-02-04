'use client'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  if (pathname === '/workplace') {
    return null
  }
  return (
    <footer className={pathname === '/' ? 'main' : ''}>
      <div className="footer-container">Copyrights© 2025 따름인 All Rights Reserved.</div>
    </footer>
  )
}
