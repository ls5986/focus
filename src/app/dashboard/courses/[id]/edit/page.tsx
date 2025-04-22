import { CourseEditForm } from './CourseEditForm'

// Mock data for static generation
const STATIC_COURSE_IDS = ['1', '2', '3']

export function generateStaticParams() {
  return STATIC_COURSE_IDS.map((id) => ({
    id: id,
  }))
}

// Mock course data
const mockCourses = {
  '1': {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Master modern web development with this comprehensive course.',
    price: 99.99,
    imageUrl: '/course-1.jpg'
  },
  '2': {
    id: '2',
    title: 'Advanced React Development',
    description: 'Take your React skills to the next level.',
    price: 149.99,
    imageUrl: '/course-2.jpg'
  },
  '3': {
    id: '3',
    title: 'Full Stack Development with Next.js',
    description: 'Build modern full-stack applications.',
    price: 199.99,
    imageUrl: '/course-3.jpg'
  }
}

export default function EditCoursePage({ params }: { params: { id: string } }) {
  const course = mockCourses[params.id as keyof typeof mockCourses]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Course</h1>
      <CourseEditForm initialData={course} />
    </div>
  )
} 