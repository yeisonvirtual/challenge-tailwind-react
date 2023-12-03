import { Header } from './components/header'
import { MainArticle } from './components/MainArticle'
import './index.css'
import { NewContainer } from './components/NewContainer'
import { ArticlesContainer } from './components/ArticlesContainer'
import { useState } from 'react'

function App() {

  const [menuClicked, setMenuClicked] = useState(true)

  const handleClick = () => {
    setMenuClicked(prevState => !prevState)
  }

  return (
    <>
    
    <main className='px-4 pt-6'>

      <div onClick={handleClick} className={`${menuClicked ? 'hidden' : ''} sm:hidden bg-gray-600/50 backdrop-blur-sm min-h-screen fixed w-full top-0 left-0 right-0`}></div>
      
      <Header menuClicked={menuClicked} handleClick={handleClick} />

      <div className='lg:flex lg:gap-8'>
        <MainArticle />
        <NewContainer />
      </div>

      <ArticlesContainer />

      <div className='flex items-center justify-center h-20'>
        Challenge by&nbsp;<a className='text-blue-500' href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by&nbsp;<a className='text-blue-500' href="https://github.com/yeisonvirtual">Yeison Rojas</a>.
      </div>

    </main>
    </>
  )
}

export default App
