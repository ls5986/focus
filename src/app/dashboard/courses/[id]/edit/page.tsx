'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { CourseForm } from '@/components/courses/CourseForm'

interface Course {
  id: string
  title: string
  description: string
  imageUrl?: string
  price: number
}

export default function EditCoursePage() {
  const params = useParams()
  const [course, setCourse] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/courses/${params.id}`)
        if (!response.ok) throw new Error('Failed to fetch course')
        const data = await response.json()
        setCourse(data)
      } catch (error) {
        console.error('Error fetching course:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchCourse()
    }
  }, [params.id])

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>
  }

  if (!course) {
    return <div className="text-center py-12">Course not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Course</h1>
      <CourseForm initialData={course} isEditing />
    </div>
  )
} 