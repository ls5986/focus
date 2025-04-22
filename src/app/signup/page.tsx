import { SignupForm } from '@/components/auth/SignupForm'

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Create your account</h1>
        <p className="text-gray-400">
          Join Focus to start learning or teaching
        </p>
      </div>
      
      <SignupForm />
    </div>
  )
} 