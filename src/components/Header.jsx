import logo from '../assets/images/logo.svg'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className='flex place-content-between py-[28px] sm:pt-[90px] sm:pb-[54px] px-[16px] sm:px-[50px] lg:px-[165px] items-center mb-4'>
      <img src={logo} alt="logo" />
      <NavBar />
    </header>
  )
}
