/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6uwryXwJRi3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
// import './globals.css'
import Link from "next/link"

export default function Component() {
  const [showSignUp, setShowSignUp] = useState(true)
  return (
    <div className="grid md:grid-cols-2 gap-8 mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-24">
      {showSignUp && (
        <div className="mx-auto space-y-6 animate-fade-in-up">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-muted-foreground">Create your account to join our social network.</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input
                  id="first-name"
                  placeholder="John"
                  required
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  required
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="birthday">Date of Birth</Label>
                <Input
                  id="birthday"
                  type="date"
                  required
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="avatar">Avatar</Label>
                <Input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="johndoe123"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="about-me">About Me</Label>
              <Textarea
                id="about-me"
                placeholder="Tell us a little about yourself..."
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <Button type="submit" className="w-full transition-transform duration-300 hover:scale-105">
              Sign Up
            </Button>
          </div>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link
              href="#"
              onClick={() => setShowSignUp(false)}
              className="underline transition-colors duration-300 hover:text-primary"
              prefetch={false}
            >
              Login
            </Link>
          </div>
        </div>
      )}
      {!showSignUp && (
        <div className="mx-auto space-y-6 animate-fade-in-up">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground">Enter your email or username to access your account.</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-or-username">Email or Username</Label>
              <Input
                id="email-or-username"
                placeholder="john@example.com or johndoe123"
                required
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <Button type="submit" className="w-full transition-transform duration-300 hover:scale-105">
              Login
            </Button>
          </div>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="#"
              onClick={() => setShowSignUp(true)}
              className="underline transition-colors duration-300 hover:text-primary"
              prefetch={false}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
      <div className="hidden md:block">
        <img
          src="../img/loginImg.jpeg"
          alt="Image"
          width={800}
          height={600}
          className="w-full h-full object-cover rounded-lg"
          style={{ aspectRatio: '800 / 600', objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}