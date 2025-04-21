'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  
  return (
    <header className="border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Focus
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-8">
                <Link 
                  href="/courses" 
                  className={`${
                    pathname === '/courses' 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}
                >
                  Courses
                </Link>
                <Link 
                  href="/instructors" 
                  className={`${
                    pathname === '/instructors' 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  } transition-colors duration-200`}
                >
                  Instructors
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className="btn-secondary">
              Log in
            </Link>
            <Link href="/signup" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 