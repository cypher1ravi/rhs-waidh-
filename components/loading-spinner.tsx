"use client"

import { useState, useEffect } from "react"
import RHSLogo from "./logo"
import { BookOpen, GraduationCap, Star, Award } from "lucide-react"

export default function LoadingSpinner() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const loadingSteps = [
    { text: "Initializing RHS Portal...", icon: BookOpen },
    { text: "Loading Academic Resources...", icon: GraduationCap },
    { text: "Preparing Excellence...", icon: Star },
    { text: "Welcome to Ravindra High School!", icon: Award },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepInterval)
          return prev
        }
        return prev + 1
      })
    }, 1200)

    return () => {
      clearInterval(interval)
      clearInterval(stepInterval)
    }
  }, [])

  const CurrentIcon = loadingSteps[currentStep]?.icon || BookOpen

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full animate-ping"></div>
      </div>

      {/* Floating Academic Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-bounce delay-300">
          <BookOpen className="w-8 h-8 text-blue-300/60" />
        </div>
        <div className="absolute top-32 right-32 animate-bounce delay-700">
          <GraduationCap className="w-10 h-10 text-indigo-300/60" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce delay-500">
          <Star className="w-6 h-6 text-purple-300/60" />
        </div>
        <div className="absolute bottom-20 right-20 animate-bounce delay-1000">
          <Award className="w-8 h-8 text-blue-300/60" />
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="text-center z-10 max-w-md mx-auto px-6">
        {/* Logo with Pulsing Animation */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-white/80 rounded-full blur-xl animate-pulse"></div>
          <div className="relative transform hover:scale-105 transition-transform duration-300">
            <RHSLogo variant="icon-only" size="xl" theme="blue" />
          </div>
        </div>

        {/* School Name with Gradient */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Ravindra High School
          </h1>
          <p className="text-gray-600 text-lg font-medium">Waidhan, Singrauli</p>
          <p className="text-gray-500 text-sm italic mt-1">We Serve Society By Serving People</p>
        </div>

        {/* Animated Progress Ring */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto relative">
            {/* Background Circle */}
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-200"
              />
              {/* Progress Circle */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                className="text-blue-600 transition-all duration-300 ease-out"
                style={{
                  strokeDasharray: `${2 * Math.PI * 50}`,
                  strokeDashoffset: `${2 * Math.PI * 50 * (1 - progress / 100)}`,
                }}
              />
            </svg>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <CurrentIcon className="w-8 h-8 text-blue-600 mx-auto mb-2 animate-pulse" />
                <span className="text-2xl font-bold text-gray-800">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Steps */}
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CurrentIcon className="w-5 h-5 text-blue-600 animate-spin" />
            <p className="text-lg font-semibold text-gray-700 animate-pulse">
              {loadingSteps[currentStep]?.text || "Loading..."}
            </p>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center space-x-2">
            {loadingSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= currentStep ? "bg-blue-600 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
          </div>
        </div>

        {/* Motivational Text */}
        <div className="text-center">
          <p className="text-gray-600 text-sm leading-relaxed">Preparing an exceptional educational experience...</p>
          <div className="flex justify-center items-center space-x-1 mt-2">
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
    </div>
  )
}
