'use client'

import React from 'react'
import { VideoPlayer } from '@/components/courses/VideoPlayer'
import { CourseOutline } from '@/components/courses/CourseOutline'

interface PageProps {
  params: {
    id: string
  }
}

// This would come from your API/database
const mockCourse = {
  id: '1',
  title: 'Complete Web Development Bootcamp',
  description: 'Master modern web development with this comprehensive course. Learn HTML, CSS, JavaScript, React, and more.',
  instructor: {
    name: 'John Doe',
    title: 'Senior Web Developer',
    bio: '10+ years of experience in web development and teaching.',
    avatar: '/instructor-1.jpg'
  },
  sections: [
    {
      id: 's1',
      title: 'Introduction to Web Development',
      lessons: [
        {
          id: 'l1',
          title: 'Welcome to the Course',
          duration: 300,
          videoUrl: 'https://example.com/video1.mp4',
          completed: true
        },
        {
          id: 'l2',
          title: 'Setting Up Your Development Environment',
          duration: 900,
          videoUrl: 'https://example.com/video2.mp4',
          completed: false
        }
      ]
    },
    {
      id: 's2',
      title: 'HTML & CSS Fundamentals',
      lessons: [
        {
          id: 'l3',
          title: 'HTML Basics',
          duration: 1200,
          videoUrl: 'https://example.com/video3.mp4',
          completed: false
        },
        {
          id: 'l4',
          title: 'CSS Styling',
          duration: 1500,
          videoUrl: 'https://example.com/video4.mp4',
          completed: false
        }
      ]
    }
  ]
}

export default function CoursePage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <VideoPlayer
              url={mockCourse.sections[0].lessons[0].videoUrl}
              title={mockCourse.sections[0].lessons[0].title}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl font-bold mb-4">{mockCourse.title}</h1>
              <p className="text-gray-400 mb-6">{mockCourse.description}</p>
              
              <div className="card mb-8">
                <h2 className="text-xl font-semibold mb-4">About the Instructor</h2>
                <div className="flex items-start space-x-4">
                  <img
                    src={mockCourse.instructor.avatar}
                    alt={mockCourse.instructor.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{mockCourse.instructor.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{mockCourse.instructor.title}</p>
                    <p className="text-gray-400">{mockCourse.instructor.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Course Outline */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Course Content</h2>
              <CourseOutline
                sections={mockCourse.sections}
                currentLessonId="l1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 