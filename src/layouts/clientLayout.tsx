import React from 'react'
import Navbar from '../components/layouts/Navbar'
import Sidebar from '@/components/layouts/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex w-screen'>
      <Sidebar/>
      <div className="flex-1 max-w-screen-2xl ">
        <Navbar />
        <main className="min-h-screen z-10 w-full">
          {children}
        </main>
      </div>
    </div>
  )
}