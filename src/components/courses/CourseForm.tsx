'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface CourseFormProps {
  initialData?: {
    id?: string
    title: string
    description: string
    imageUrl?: string
    price: number
  }
  isEditing?: boolean
}

export function CourseForm({ initialData, isEditing = false }: CourseFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    price: initialData?.price || 0,
    imageUrl: initialData?.imageUrl || ''
  })

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImageFile(file)
    
    // Create preview URL
    const reader = new FileReader()
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, imageUrl: reader.result as string }))
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Upload image if there's a new one
      let imageUrl = formData.imageUrl
      if (imageFile) {
        const formData = new FormData()
        formData.append('file', imageFile)
        
        const response = await fetch(`/api/upload?filename=${imageFile.name}`, {
          method: 'POST',
          body: imageFile
        })
        
        const { url } = await response.json()
        imageUrl = url
      }

      // Create or update course
      const response = await fetch(`/api/courses${initialData?.id ? `/${initialData.id}` : ''}`, {
        method: isEditing ? 'PATCH' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          imageUrl,
        }),
      })

      if (!response.ok) throw new Error('Failed to save course')

      router.push('/dashboard/courses')
      router.refresh()
    } catch (error) {
      console.error('Error saving course:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Course Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="input mt-1 block w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="input mt-1 block w-full h-32"
          required
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium">
          Price (USD)
        </label>
        <input
          type="number"
          id="price"
          min="0"
          step="0.01"
          value={formData.price}
          onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) }))}
          className="input mt-1 block w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium">
          Course Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="input mt-1 block w-full"
        />
        {formData.imageUrl && (
          <div className="mt-2 relative aspect-video">
            <Image
              src={formData.imageUrl}
              alt="Course preview"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full"
      >
        {isLoading ? 'Saving...' : isEditing ? 'Update Course' : 'Create Course'}
      </button>
    </form>
  )
} 