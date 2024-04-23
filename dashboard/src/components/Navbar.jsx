import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (<>


    <nav id="nav" class= "bg-amber-100  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-green-800 ">
             <NavLink to="/">A M R U T A M</NavLink> </span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button class="inline-flex items-center border-green-800 border-2 pb-2 py-1 px-3 focus:outline-none hover:bg-green-700 hover:text-white rounded-lg text-base mt-4 md:mt-0 mx-2 ">Login
          </button>
          <button class="inline-flex items-center border-green-800 border-2 pb-2 py-1 px-4 focus:outline-none bg-green-800 text-white rounded-lg text-base mt-4 md:mt-0 ">
            <NavLink to="/signup">Sign-Up</NavLink>
            
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
          <ul class="flex flex-col p-4 md:p-0 mt-4 text-lg font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a href="#" class="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-green-800 hover:font-semibold" aria-current="page"><NavLink to="/">Home</NavLink></a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-green-800 hover:font-semibold"> <NavLink to = "/docinfo">Find Doctors</NavLink> </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-green-800 hover:font-semibold"> <NavLink to = "/about">About Us</NavLink> </a>
            </li>

          </ul>
        </div>


      </div>
    </nav>


  </>)
}