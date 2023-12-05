import burgerMenu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/icon-menu-close.svg'
import { useState } from 'react'

export const NavBar = () => {

  const [menuClicked, setMenuClicked] = useState(true)

  const handleClick = () => {
    setMenuClicked(prevState => !prevState)
  }

  return (

    <>
      
      <div onClick={handleClick} className={`${menuClicked ? 'hidden' : ''} sm:hidden bg-gray-600/50 backdrop-blur-sm min-h-screen fixed w-full top-0 left-0 right-0`}></div>
      
      <nav>
        <ul 
        className={`
        ${menuClicked ? 'hidden' : ''}
        fixed top-0 right-0 h-full
        w-[256px] text-[16px] p-[24px]
        bg-white
        sm:flex
        sm:text-[16px]
        sm:w-[438px]
        sm:place-content-around
        sm:relative sm:h-auto sm:p-0
        `}>

          <li className={`${menuClicked ? 'hidden' : ''} sm:hidden mb-[87px] cursor-pointer flex place-content-end`}>
            <img src={closeBtn} alt="closeMenu" onClick={handleClick} />
          </li>
          <li className='mb-8 sm:mb-0 text-center'>
            <a href="#" className='text-SoftRed'>Home</a>
          </li>
          <li className='mb-8 sm:mb-0 text-center'>
            <a href="#" className='hover:text-SoftRed'>New</a>
          </li>
          <li className='mb-8 sm:mb-0 text-center'>
            <a href="#" className='hover:text-SoftRed'>Popular</a>
          </li>
          <li className='mb-8 sm:mb-0 text-center'>
            <a href="#" className='hover:text-SoftRed'>Trending</a>
          </li>
          <li className='mb-8 sm:mb-0 text-center'>
            <a href="#" className='hover:text-SoftRed'>Categories</a>
          </li>

        </ul>

        <img src={burgerMenu} alt="burgerMenu" className={`${menuClicked ? '' : 'hidden'} sm:hidden w-10 h-4 cursor-pointer`} onClick={handleClick} />
        
      </nav>

    </>
  )
}
