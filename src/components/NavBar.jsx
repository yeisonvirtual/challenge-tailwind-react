import burgerMenu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/icon-menu-close.svg'

export const NavBar = ({menuClicked, handleClick}) => {

  return (

    <>
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
        <li className={`${menuClicked ? 'hidden' : ''} sm:hidden cursor-pointer flex place-content-end`}>
          <img className='w-8 h-8 mb-[87px]' src={closeBtn} alt="closeMenu" onClick={handleClick} />
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
    </>
  )
}
