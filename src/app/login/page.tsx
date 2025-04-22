import { LoginForm } from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome back</h1>
        <p className="text-gray-400">
          Log in to continue your learning journey
        </p>
      </div>
      
      <LoginForm />
    </div>
  )
} 