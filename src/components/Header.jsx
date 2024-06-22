import { NavBar } from './NavBar'
import logo from '/pngwing.com.png'
import nike from '/icon-nike.png'

export const Header = () => {
  return (
    <header className='flex items-center py-4  dark:bg-blue-950 dark:text-white '>
        <figure className='w-40 h-10 ml-2' >
          <img src={nike} alt="" className='w-full h-[40px]' />
        </figure>
        <NavBar />

      
    </header>
  )
}


