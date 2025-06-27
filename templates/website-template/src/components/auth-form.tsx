import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { authClient } from '@/lib/auth/client-react'
import { useState } from 'react'

export function AuthForm({ type }: { type: 'login' | 'register' }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async () => {
    if (!email) {
      setErrorMessage('Email is required')
      return
    }
    if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address')
      return
    }
    if (!password) {
      setErrorMessage('Password is required')
      return
    }
    setErrorMessage('')

    if (type === 'login') {
      await handleLogin()
    } else {
      await handleRegister()
    }
  }
  const handleLogin = async () => {
    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/dashboard',
    })

    if (error?.message) {
      setErrorMessage(error.message)
    }
  }

  const handleRegister = async () => {
    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: '/dashboard',
    })

    if (error?.message) {
      setErrorMessage(error.message)
    }
  }

  return (
    <div className='flex flex-col gap-6'>
      <Card>
        <CardHeader>
          {type === 'register' ? (
            <>
              <CardTitle>Create your account</CardTitle>
              <CardDescription>
                Enter your details below to create a new account
              </CardDescription>
            </>
          ) : (
            <>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent>
          <form>
            <div className='flex flex-col gap-6'>
              {type === 'register' ? (
                <div className='grid gap-3'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    type='text'
                    placeholder='John Doe'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              ) : null}
              <div className='grid gap-3'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='john.doe@magicace.co.uk'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='grid gap-3'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                </div>
                <div>
                  <Input
                    id='password'
                    type='password'
                    placeholder='••••••••'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {type === 'login' ? (
                    <a
                      href='/auth/forgot-password'
                      className='inline-block text-xs italic underline-offset-4 hover:underline'
                    >
                      Forgot your password?
                    </a>
                  ) : null}
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <Button
                  type='submit'
                  className='w-full'
                  onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                  disabled={!email || !password}
                >
                  {type === 'register' ? 'Create Account' : 'Login'}
                </Button>
              </div>
            </div>
            <div className='mt-4 text-center text-sm'>
              {type === 'login' ? (
                <>
                  Don&apos;t have an account?{' '}
                  <a
                    href='/auth/register'
                    className='underline underline-offset-4'
                  >
                    Sign up
                  </a>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <a
                    href='/auth/login'
                    className='underline underline-offset-4'
                  >
                    Login
                  </a>
                </>
              )}
            </div>
            {errorMessage ? (
              <div className='mt-4 text-center text-sm text-red-500'>
                {errorMessage}
              </div>
            ) : null}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
