import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Sidebar from '@/components/layouts/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex min-h-screen'>
      <Sidebar/>
      <div className="flex-1">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </div>
  )
}