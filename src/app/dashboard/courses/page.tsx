'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

interface Course {
  id: string
  title: string
  description: string
  imageUrl?: string
  price: number
  published: boolean
}

export default function CourseDashboard() {
  const { data: session } = useSession()
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`/api/courses?instructorId=${session?.user?.id}`)
        if (!response.ok) throw new Error('Failed to fetch courses')
        const data = await response.json()
        setCourses(data)
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (session?.user?.id) {
      fetchCourses()
    }
  }, [session?.user?.id])

  const handlePublishToggle = async (courseId: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/courses/${courseId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          published: !currentStatus,
        }),
      })

      if (!response.ok) throw new Error('Failed to update course')

      setCourses(prev =>
        prev.map(course =>
          course.id === courseId
            ? { ...course, published: !course.published }
            : course
        )
      )
    } catch (error) {
      console.error('Error updating course:', error)
    }
  }

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <Link href="/dashboard/courses/create" className="btn-primary">
          Create New Course
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card">
            {course.imageUrl && (
              <div className="relative aspect-video mb-4">
                <Image
                  src={course.imageUrl}
                  alt={course.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-400 mb-4 line-clamp-2">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${course.price}</span>
              <div className="space-x-2">
                <Link
                  href={`/dashboard/courses/${course.id}/edit`}
                  className="btn-secondary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handlePublishToggle(course.id, course.published)}
                  className={`btn-${course.published ? 'secondary' : 'primary'}`}
                >
                  {course.published ? 'Unpublish' : 'Publish'}
                </button>
              </div>
            </div>
          </div>
        ))}

        {courses.length === 0 && (
          <div className="col-span-full text-center py-12 card">
            <h3 className="text-xl font-semibold mb-2">No courses yet</h3>
            <p className="text-gray-400 mb-4">
              Get started by creating your first course
            </p>
            <Link href="/dashboard/courses/create" className="btn-primary">
              Create Course
            </Link>
          </div>
        )}
      </div>
    </div>
  )
} 