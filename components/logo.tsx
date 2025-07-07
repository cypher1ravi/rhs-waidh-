"use client"

import Image from "next/image"

interface LogoProps {
  variant?: "default" | "compact" | "icon-only"
  size?: "sm" | "md" | "lg" | "xl"
  theme?: "blue" | "green" | "purple" | "orange" | "red"
  onDark?: boolean // New prop to handle dark vs light backgrounds
  add?:boolean
}

export default function RHSLogo({ variant = "default", size = "md", theme = "blue", onDark = false, add = true }: LogoProps) {
  const sizeClasses = {
    sm: {
      container: "h-8",
      logo: 32,
      text: "text-sm",
      subtext: "text-xs",
    },
    md: {
      container: "h-12",
      logo: 48,
      text: "text-xl",
      subtext: "text-sm",
    },
    lg: {
      container: "h-16",
      logo: 64,
      text: "text-2xl",
      subtext: "text-base",
    },
    xl: {
      container: "h-20",
      logo: 80,
      text: "text-3xl",
      subtext: "text-lg",
    },
  }

  const classes = sizeClasses[size]

  // Dynamic text colors based on background
  const textColors = onDark
    ? {
      primary: "text-white",
      secondary: "text-gray-300",
      tertiary: "text-gray-400",
    }
    : {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      tertiary: "text-gray-500",
    }

  if (variant === "icon-only") {
    return (
      <div className={`${classes.container} aspect-square relative`}>
        <div className="bg-white rounded-lg p-1 shadow-sm">
          <Image
            src="/images/rhs-logo.webp"
            alt="Ravindra High School Logo"
            width={classes.logo}
            height={classes.logo}
            className="object-contain"
            priority
          />
        </div>
      </div>
    )
  }

  if (variant === "compact") {
    return (
      <div className="flex items-center space-x-3">
        <div className={`${classes.container} aspect-square relative`}>
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <Image
              src="/images/rhs-logo.webp"
              alt="Ravindra High School Logo"
              width={classes.logo}
              height={classes.logo}
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div>
          <h1 className={`${classes.text} font-bold leading-tight ${textColors.primary}`}>RHS</h1>
          {add&&<p className={`${classes.subtext} leading-tight ${textColors.secondary}`}>Waidhan, Singrauli</p>}
          <p className={`text-xs leading-tight ${textColors.tertiary} italic`}>We Serve Society By Serving People</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-4">
      <div className={`${classes.container} aspect-square relative`}>
        <div className="bg-white rounded-lg p-1 shadow-sm">
          <Image
            src="/images/rhs-logo.webp"
            alt="Ravindra High School Logo - We Serve Society By Serving People"
            width={classes.logo}
            height={classes.logo}
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div>
        <h1 className={`${classes.text} font-bold leading-tight ${textColors.primary}`}>Ravindra High School</h1>
        {add && <p className={`${classes.subtext} leading-tight ${textColors.secondary}`}>Waidhan, Singrauli</p>}        <p className={`text-xs leading-tight ${textColors.tertiary} italic`}>We Serve Society By Serving People</p>
      </div>
    </div>
  )
}
