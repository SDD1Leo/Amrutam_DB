export default function AboutMe() {
    return (
        <>
            <div className="w-full border-2 border-amber-100 mb-10 rounded-lg">
                <h2 className="w-full bg-gradient-to-r from-amber-100  text-black text-2xl py-2 px-5 inline-flex justify-between  ">
                    A Little About Me
                    <button class="inline-flex items-center bg-white border-green-800 border-2 pb-1 px-4 focus:outline-none hover:bg-green-700 hover:text-white rounded-lg text-base mt-4 md:mt-0 mx-2  ">Follow  +
                    </button>
                </h2>
                <div className=" p-7 text-gray-400 text-xl">
                    <p>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </p>
                    <div className="flex justify-between items-center">
                        <div className="my-3 w-5/6  h-0 border-2 border-gray-100"></div>
                        <button className="text-black font-semibold underline my-3 ">Read More</button>
                    </div>
                    <h2 className="flex flex-row space-x-4 text-black my-4 ">
                        <p className=" font-medium-">Languages Spoken</p>
                        <p className=" bg-gray-100 rounded-full py-1 px-3 ">English</p>
                        <p className=" bg-gray-100 rounded-full py-1 px-3 ">Hindi</p>
                        <p className=" bg-gray-100 rounded-full py-1 px-3 ">Telgu</p>
                    </h2>
                    <span class="inline-flex sm:ml-auto sm:mt-0 my-4 justify-center sm:justify-start">
                        <a href="" class="text-gray-500 bg-gray-100 rounded-full p-3">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a href="" class="ml-3 text-gray-500 bg-gray-100 rounded-full p-3">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a href="" class="ml-3 text-gray-500 bg-gray-100 rounded-full p-3">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a href="" class="ml-3 text-gray-500 bg-gray-100 rounded-full p-3">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </>
    )
}