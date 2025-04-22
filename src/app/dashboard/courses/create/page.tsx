'use client'

import { CourseForm } from '@/components/courses/CourseForm'

export default function CreateCoursePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Course</h1>
      <CourseForm />
    </div>
  )
} 