import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'; 

const index = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = ()=> {
    setDarkTheme(!darkTheme)
  } 

  function changeMedia(mq) {
    setDarkTheme(mq.matches);
  }
  
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addEventListener('change', changeMedia)
    setDarkTheme(mq.matches)
 
    return () => {
      mq.removeEventListener('change', changeMedia)
    }
  }, [])

  useEffect(()=> {
    const currentTheme = darkTheme ? 'dark-theme' : 'light-theme';
    document.documentElement.setAttribute('theme', currentTheme);
  }, [darkTheme])

  return (
    <header className='header__nav'>
      <nav className='navbar'>
        <div className="content">
          <h1>
            <Link to='/' className='navbar__brand'>Where in the world?</Link>
          </h1>
          
          <button className='btn__theme' onClick={toggleTheme} type='button'>
            <i className={`${darkTheme ? 'fas' : 'far'} fa-moon`}></i> 
            <small> Dark Mode </small>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default React.memo(index)
