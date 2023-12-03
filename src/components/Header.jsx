import logo from '../assets/images/logo.svg'
import { NavBar } from './NavBar'

export const Header = ({menuClicked, handleClick}) => {
  return (
    <header className='flex place-content-between mb-8'>
      <img src={logo} alt="logo" />
      <NavBar menuClicked={menuClicked} handleClick={handleClick} />
    </header>
  )
}
