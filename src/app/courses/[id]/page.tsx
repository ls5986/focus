import { CourseContent } from './CourseContent'

// Mock data for static generation
const STATIC_COURSE_IDS = ['1', '2', '3']

export function generateStaticParams() {
  return STATIC_COURSE_IDS.map((id) => ({
    id: id,
  }))
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

// Mock courses data for static generation
const mockCourses = {
  '1': mockCourse,
  '2': {
    ...mockCourse,
    id: '2',
    title: 'Advanced React Development',
  },
  '3': {
    ...mockCourse,
    id: '3',
    title: 'Full Stack Development with Next.js',
  }
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = mockCourses[params.id as keyof typeof mockCourses] || mockCourse

  return <CourseContent course={course} />
} 