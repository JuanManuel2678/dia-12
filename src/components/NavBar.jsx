import ven from '/public/ban-ven.png'
import dark1 from '/public/dark.svg'
import  useTheme  from "../Hooks/useTheme"


export const NavBar = () => {
  
  const {toggleTheme, theme} = useTheme

    const lupa = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
    const carrito = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>

  return (
    <nav className="flex justify-between px-12 w-full dark:bg-blue-950 dark:text-white">
      <span className="md:hidden text-2xl absolute top-4 font-bold hover:text-red-900 z-10 left-2">❌</span>
        <ul className="flex justify-between gap-5">
            <li className=" hover:bg-[#2b88e6] hover:px-6  hover:text-white hover:rounded-lg cursor-pointer">Women</li>
            <li className=" hover:bg-[#2b88e6] hover:px-6  hover:text-white hover:rounded-lg cursor-pointer">Men</li>
            <li className=" hover:bg-[#2b88e6] hover:px-6  hover:text-white hover:rounded-lg cursor-pointer">Company</li>
            <li className=" hover:bg-[#2b88e6] hover:px-6  hover:text-white hover:rounded-lg cursor-pointer">Stores</li>
        </ul>
        <ul className=" flex justify-between gap-5">
            <li className=" hover:bg-[#e61c1caa] hover:px-6  hover:text-white hover:rounded-lg cursor-pointer"> Sing in</li>
            <li className=" hover:bg-[#e61c1caa] hover:px-6  hover:text-white hover:rounded-lg cursor-pointer"> Create Accound</li>
            <li className="flex gap-1 hover:bg-[#e61c1caa] hover:px-6  hover:text-white hover:rounded-lg cursor-pointer"><img src={ven} alt="icon bandera" className='w-[20px] flex' />VEN</li>
            <li className=" hover:bg-[#e61c1caa] hover:px-6  hover:text-white hover:rounded-lg cursor-pointer">{lupa}</li>
            <li className=" hover:bg-[#e61c1caa] hover:px-6  hover:text-white hover:rounded-lg cursor-pointer">{carrito}</li>
            <button onClick={toggleTheme}>{ theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /   >
            </svg> }</button>
            </ul>
    </nav>
  )
}


{/* // onClick={toggleTheme}toggleTheme */}