'use client'

import Image from 'next/image'
import Link from 'next/link'

interface CourseCardProps {
  id: string
  title: string
  description: string
  imageUrl: string
  instructorName: string
  price: number
}

export function CourseCard({
  id,
  title,
  description,
  imageUrl,
  instructorName,
  price
}: CourseCardProps) {
  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-video mb-4">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      <div className="text-sm text-gray-400 mb-4">
        By {instructorName}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">
          ${price.toFixed(2)}
        </span>
        <Link 
          href={`/courses/${id}`}
          className="btn-primary"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
} 