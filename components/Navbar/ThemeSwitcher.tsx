"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function toggleTheme(){
    if (theme == "dark") setTheme("light");
    if (theme == "light") setTheme("dark");
  }

  return (
    <Button
      size={"icon"}
      className=''
      onClick={toggleTheme}
    >
      {theme === "dark" ? 
      <SunIcon/> :
      <MoonIcon/>
      }
    </Button>
  )
}
