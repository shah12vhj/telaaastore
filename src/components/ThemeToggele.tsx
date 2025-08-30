'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { Button } from './ui/button'

export default function ThemeToggele() {
    const {theme,setTheme}=useTheme()
    const [mount,setMount]=useState(false)
    useEffect(() => {
      setMount(true)
    }, [])
    if (!mount) 
        return null
    const isDark=theme ==='dark'
    
    
  return (
        <Button
        variant='ghost'
        size='icon'
        onClick={() => setTheme(isDark ? "light":'dark')}
        className='text-xl'
        >
            {isDark ?<MdOutlineLightMode/>:<MdDarkMode/>}
        </Button>
)
}
