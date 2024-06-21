import { NavBar } from './NavBar'
import logo from '/pngwing.com.png'
import nike from '/icon-nike.png'

export const Header = () => {
  return (
    <header className='flex items-center py-4 '>
        <figure className='w-40 h-10 ml-2' >
          <img src={nike} alt="" className='w-full h-[40px]' />
        </figure>
        <NavBar />

      
    </header>
  )
}


