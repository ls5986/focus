'use client'

import { CourseCard } from '@/components/courses/CourseCard'

// This would come from your API/database
const mockCourses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Master modern web development with this comprehensive course. Learn HTML, CSS, JavaScript, React, and more.',
    imageUrl: '/course-1.jpg',
    instructorName: 'John Doe',
    price: 99.99
  },
  {
    id: '2',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the principles of user interface and user experience design. Create beautiful and functional designs.',
    imageUrl: '/course-2.jpg',
    instructorName: 'Jane Smith',
    price: 79.99
  },
  {
    id: '3',
    title: 'Advanced JavaScript Programming',
    description: 'Take your JavaScript skills to the next level. Learn advanced concepts, patterns, and modern practices.',
    imageUrl: '/course-3.jpg',
    instructorName: 'Mike Johnson',
    price: 89.99
  }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Available Courses</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Browse our selection of high-quality courses taught by industry experts.
          </p>
        </div>

        {/* Filters - To be implemented */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search courses..."
              className="input"
            />
            <select className="input">
              <option value="">Category</option>
              <option value="web">Web Development</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
            </select>
            <select className="input">
              <option value="">Price Range</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
            <select className="input">
              <option value="">Sort By</option>
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              instructorName={course.instructorName}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 