import { useLayoutEffect, useState } from 'react'

export default function Header() {
  const [isLightTheme, setIsLightTheme] = useState(localStorage.getItem('light-theme') === 'true')

  useLayoutEffect(() => {
    document.documentElement.className = isLightTheme ? '' : 'dark'
    localStorage.setItem('light-theme', isLightTheme)
  }, [isLightTheme])

  function toggleTheme() {
    setIsLightTheme(prevTheme => !prevTheme)
  }

  return (
    <div className="flex justify-between font-bold">
      <h1 className="text-h1 leading-h1">devfinder</h1>
      <button className="flex items-center transition-opacity hover:opacity-60" onClick={toggleTheme}>
        <span className="mr-4 text-h4 leading-h4 tracking-[2.5px] uppercase text-blue dark:text-white">
          {isLightTheme ? 'Dark' : 'Light'}
        </span>
        {isLightTheme ? <img src="/icon-moon.svg" alt="Dark" /> : <img src="/icon-sun.svg" alt="Light" />}
      </button>
    </div>
  )
}
