import React, { useEffect, useState } from "react"

 export const useTheme = () => {
    
    const [theme, setTheme ] = useState(localStorage.theme || 'light')

    useEffect (() => {

    if((window.matchMedia('(prefers-color-scheme: dark)').matches) &&  (!('theme' in localStorage))){
        localStorage.setItem('theme', 'dark');
        setTheme('dark')
      }
  
      if (localStorage.theme === 'dark') {
  
        document.documentElement.classList.add('dark')
  
      } else {
        document.documentElement.classList.remove('dark')
  
      }
    }, [theme])
  
  
    function toggleTheme() {
      if (theme === 'dark') {
        localStorage.setItem('theme', 'light');
        setTheme('light')
      } else {
        localStorage.setItem('theme', 'dark');
        setTheme('dark')
      }     
    }

  return ( 
    toggleTheme,
    theme)
 }

export default useTheme
