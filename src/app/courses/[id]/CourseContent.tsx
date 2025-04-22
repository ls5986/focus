'use client'

import React from 'react'
import { VideoPlayer } from '@/components/courses/VideoPlayer'
import { CourseOutline } from '@/components/courses/CourseOutline'

interface Lesson {
  id: string
  title: string
  duration: number
  videoUrl: string
  completed: boolean
}

interface Section {
  id: string
  title: string
  lessons: Lesson[]
}

interface Instructor {
  name: string
  title: string
  bio: string
  avatar: string
}

interface Course {
  id: string
  title: string
  description: string
  instructor: Instructor
  sections: Section[]
}

interface CourseContentProps {
  course: Course
}

export function CourseContent({ course }: CourseContentProps) {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <VideoPlayer
              url={course.sections[0].lessons[0].videoUrl}
              title={course.sections[0].lessons[0].title}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-400 mb-6">{course.description}</p>
              
              <div className="card mb-8">
                <h2 className="text-xl font-semibold mb-4">About the Instructor</h2>
                <div className="flex items-start space-x-4">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{course.instructor.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{course.instructor.title}</p>
                    <p className="text-gray-400">{course.instructor.bio}</p>
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
                sections={course.sections}
                currentLessonId="l1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 