'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, ChevronUpIcon, PlayCircleIcon } from '@heroicons/react/24/outline'

interface Lesson {
  id: string
  title: string
  duration: number
  completed?: boolean
}

interface Section {
  id: string
  title: string
  lessons: Lesson[]
}

interface CourseOutlineProps {
  sections: Section[]
  currentLessonId?: string
}

export function CourseOutline({ sections, currentLessonId }: CourseOutlineProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    sections.map(s => s.id)
  )

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    return `${minutes} min`
  }

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <div key={section.id} className="card">
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex items-center justify-between p-4"
          >
            <h3 className="text-lg font-semibold">{section.title}</h3>
            {expandedSections.includes(section.id) ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </button>
          
          {expandedSections.includes(section.id) && (
            <div className="border-t border-gray-800">
              {section.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.id}`}
                  className={`flex items-center justify-between p-4 hover:bg-gray-800 transition-colors ${
                    currentLessonId === lesson.id ? 'bg-gray-800' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <PlayCircleIcon className="h-5 w-5 text-gray-400" />
                    <span className={lesson.completed ? 'text-gray-400' : ''}>
                      {lesson.title}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {lesson.completed && (
                      <span className="text-green-500 text-sm">Completed</span>
                    )}
                    <span className="text-sm text-gray-400">
                      {formatDuration(lesson.duration)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 