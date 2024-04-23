import Buttons from "../components/Buttons";
import Docs from "../components/Docs";
import { NavLink } from "react-router-dom";


export default function FindDoc() {
    return (
        <>
            <section class="text-gray-600 body-font bg-lime-100 ">
                <div class="container px-5 py-24 mx-auto items-center relative  ">
                    <div className="absolute top-0 left-32 h-28 w-56 rounded-bl-full rounded-br-full bg-lime-300   "></div>
                    <div className="absolute top-0 right-32 h-28 w-56 rounded-bl-full rounded-br-full bg-lime-300  "></div>
                    <div className="absolute bottom-0 right-52 h-32 w-56 rounded-tl-full rounded-tr-full bg-lime-300  "></div>
                    <div className="absolute bottom-0 left-52 h-32 w-56 rounded-tl-full rounded-tr-full bg-lime-300  "></div>
                    <div class="flex flex-col text-center w-full mb-5">
                        <h1 class="sm:text-4xl text-4xl font-medium title-font mb-4 text-gray-900">Find Expert Doctors For An In-Clinic Session Here</h1>
                    </div>
                    <div class="flex w-3/6 flex-col sm:flex-row  mx-auto px-10 sm:space-x-4 sm:space-y-0 space-y-2 items-center justify-centre ">
                        <div class="relative flex-grow  w-2/5">
                            <form class="max-w-md ">
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">

                                        <a href="">⚲</a>
                                    </div>
                                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-800 " placeholder="select location" required />
                                    <button type="submit" class="text-black absolute end-2.5 bottom-2.5  focus:ring-1 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-4 py-2 ">⮟</button>
                                </div>
                            </form>
                        </div>
                        <div class="relative flex-grow  w-3/5">
                            <form class=" ">
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-800 " placeholder="eg. Doctor,Specialization, Clinic ..." required />
                                    <button type="submit" class="text-black absolute end-2.5 bottom-2.5  focus:ring-1 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-3xl px-3 ">→</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 px-6 flex flex-row justify-center border-b-2">
                <section className="  flex flex-row justify-center w-8/12">
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="bg-gray-200 text-black border-2 hover:bg-lime-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-5 w-1/5 justify-between" type="button">Expertise <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="bg-gray-200 text-black border-2 hover:bg-lime-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-5 w-1/5 justify-between " type="button">Gender <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="bg-gray-200 text-black border-2 hover:bg-lime-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-5 w-1/5 justify-between " type="button">Fees <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="bg-gray-200 text-black border-2 hover:bg-lime-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-5 w-1/5 justify-between " type="button">Languages <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="bg-gray-200 text-black border-2 hover:bg-lime-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-5 w-1/5 justify-between " type="button">All Filters <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>

                </section>
            </section>

            <section className="flex flex-row pt-10 justify-end px-10">
                <div className="bg-lime-100 rounded-full px-10 py-2 pb-3 mx-3 inline-flex  items-center justify-between">
                    <p className=" mr-4">Hair care</p>
                    <a href="">╳</a>
                </div>
                <div className="bg-lime-100 rounded-full px-10 py-2 pb-3 mx-3 inline-flex  items-center justify-between">
                    <p className=" mr-4">Female</p>
                    <a href="">╳</a>
                </div>
                <div className="bg-lime-100 rounded-full px-10 py-2 pb-3 mx-3 inline-flex  items-center justify-between">
                    <p className=" mr-4">Rs.0-Rs.500</p>
                    <a href="">╳</a>
                </div>
                <div className="bg-lime-100 rounded-full px-10 py-2 pb-3 mx-3 inline-flex  items-center justify-between">
                    <p className=" mr-4">Hindi</p>
                    <a href="">╳</a>
                </div>
            </section>
            <section className="flex px-10 lg:flex-row md:flex-col sm:flex-col ">
                <Docs name="Dr. Prerna Narang" />
                <Docs name="Dr. Prerna Narang" />
                <Docs name="Dr. Prerna Narang" />
            </section>



        </>
    )
}