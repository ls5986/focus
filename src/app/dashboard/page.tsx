'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CourseCard } from '@/components/courses/CourseCard'

// Mock data - would come from your API/database
const mockEnrolledCourses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Master modern web development with this comprehensive course.',
    imageUrl: '/course-1.jpg',
    instructorName: 'John Doe',
    price: 99.99,
    progress: 45,
    nextLesson: {
      id: 'l2',
      title: 'Setting Up Your Development Environment'
    }
  },
  {
    id: '2',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the principles of user interface and user experience design.',
    imageUrl: '/course-2.jpg',
    instructorName: 'Jane Smith',
    price: 79.99,
    progress: 20,
    nextLesson: {
      id: 'l1',
      title: 'Introduction to UI/UX Design'
    }
  }
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('in-progress')

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Learning Dashboard</h1>
          <p className="text-gray-400">
            Track your progress and continue learning
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="text-2xl font-bold mb-1">2</div>
            <div className="text-gray-400">Courses in Progress</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold mb-1">12</div>
            <div className="text-gray-400">Hours Learned</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold mb-1">32</div>
            <div className="text-gray-400">Lessons Completed</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-800 mb-8">
          <div className="flex space-x-8">
            <button
              className={`pb-4 text-sm font-medium ${
                activeTab === 'in-progress'
                  ? 'border-b-2 border-white text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('in-progress')}
            >
              In Progress
            </button>
            <button
              className={`pb-4 text-sm font-medium ${
                activeTab === 'completed'
                  ? 'border-b-2 border-white text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('completed')}
            >
              Completed
            </button>
            <button
              className={`pb-4 text-sm font-medium ${
                activeTab === 'saved'
                  ? 'border-b-2 border-white text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('saved')}
            >
              Saved
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEnrolledCourses.map((course) => (
            <div key={course.id} className="card">
              <div className="relative aspect-video mb-4">
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
                />
                <div 
                  className="absolute bottom-2 left-2 right-2 z-20 flex items-center justify-between text-sm"
                >
                  <div className="bg-black/60 px-2 py-1 rounded">
                    {course.progress}% Complete
                  </div>
                </div>
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <div className="text-sm text-gray-400 mb-4">
                by {course.instructorName}
              </div>
              <div className="h-2 bg-gray-800 rounded-full mb-4">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <Link
                href={`/courses/${course.id}/lessons/${course.nextLesson.id}`}
                className="btn-primary w-full text-center"
              >
                Continue Learning
              </Link>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add recommended courses here */}
          </div>
        </div>
      </div>
    </div>
  )
} 