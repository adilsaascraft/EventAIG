'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

// Zod schema
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string()
  .min(8, { message: 'Password must be at least 8 characters' })
  .max(20, { message: 'Password can not be greater than 20 characters' }),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function Login() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setError('')
    setIsLoading(true)

    const hardcodedEmail = 'admin@aig.com'
    const hardcodedPassword = 'aig@123'

    await new Promise((res) => setTimeout(res, 2000))

    if (data.email === hardcodedEmail && data.password === hardcodedPassword) {
      localStorage.setItem('token', 'mock-token')
      localStorage.setItem('token', 'mock-token')
      localStorage.setItem('showWelcomeToast', 'true') 
      setTimeout(() => router.push('/home'), 1000) // wait briefly for toast to show
    } else {
      setError('Invalid email or password')
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#AFBDD1] to-[#FFFFFF] shadow-lg flex items-center justify-center">
      {/* Toast container */}

      <div className="bg-white mt-[50px] backdrop-blur-[35px] shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Event Manager Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter Email id"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter Password"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Custom Error */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-sky-800 text-white p-2 rounded hover:bg-sky-900 flex justify-center items-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Signing in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className="text-sm mt-3 text-blue-600 cursor-pointer">
            Forgot Password?
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src="https://res.cloudinary.com/dr5kn8993/image/upload/v1750330038/AIG_Event_Software/login-signup/login_bdhrsz.png"
            alt="AIG Hospital"
            className="object-cover h-full w-full"
            width={500}
            height={500}
            priority
            loading="eager"
            unoptimized
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}
