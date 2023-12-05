import logo from '../assets/images/logo.svg'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className='flex place-content-between py-6 px-4 items-center mb-4'>
      <img src={logo} alt="logo" />
      <NavBar />
    </header>
  )
}
