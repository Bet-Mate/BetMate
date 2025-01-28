import  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
})

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    console.log(values)
    // Here you would typically send a request to your backend to initiate the password reset process
    setIsSubmitted(true)
  }

  return (
    <div className="h-[93vh] flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-4 w-screen ">
      <div className="w-full max-w-md space-y-8 p-8 rounded-xl shadow-lg sm:max-w-[425px] md:max-w-screen-md md:mx-auto backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-blue-900/60 border border-blue-200 dark:border-blue-700 ">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-blue-900 dark:text-white">
            Forgot Password
          </h2>
          <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
            {isSubmitted 
              ? "If an account exists for the email provided, you will receive password reset instructions."
              : "Enter your email address and we'll send you a link to reset your password."}
          </p>
        </div>
        {!isSubmitted ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your email" 
                        {...field} 
                        className="bg-white/50 dark:bg-blue-800/50 border-blue-300 dark:border-blue-600 text-blue-900 dark:text-white placeholder-blue-500 dark:placeholder-blue-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <div className="mt-8 text-center">
            <p className="text-green-600 dark:text-green-400 mb-4">
              Check your email for further instructions.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="outline" 
              className="w-full"
            >
              Try Again
            </Button>
          </div>
        )}
        <div className="mt-4 text-center">
          <Link 
            to="/login" 
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}