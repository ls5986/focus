'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/hero-bg.jpg"
            alt="Focus Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Learn with Purpose
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our platform of expert instructors and focused learners. 
              Master new skills with high-quality courses designed for real growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses" className="btn-primary text-lg px-8 py-3">
                Browse Courses
              </Link>
              <Link href="/signup" className="btn-secondary text-lg px-8 py-3">
                Start Teaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Featured Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={`/instructor-${i}.jpg`}
                    alt={`Instructor ${i}`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-center mb-2">John Doe</h3>
                <p className="text-gray-400 text-center mb-4">
                  Expert in Web Development
                </p>
                <div className="text-center">
                  <Link href={`/instructors/${i}`} className="btn-secondary">
                    View Courses
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <div className="relative aspect-video mb-4">
                  <Image
                    src={`/course-${i}.jpg`}
                    alt={`Course ${i}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="mb-2">Complete Web Development</h3>
                <p className="text-gray-400 mb-4">
                  Master modern web development from scratch
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">$99</span>
                  <Link href={`/courses/${i}`} className="btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of learners already learning on Focus
          </p>
          <Link href="/signup" className="btn-primary text-lg px-8 py-3">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
} 