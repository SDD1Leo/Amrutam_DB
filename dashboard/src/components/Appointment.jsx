import "./Anim.css"

export default function Appointment() {

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 500;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);



    return (
        <>
        <div className="border-2 p-7  border-gray-300 mt-10 mb-8 mr-12 mx-5 rounded-md reveal">
            <div className="w-full border-2 border-gray-300 mb-6 rounded-xl px-6 py-3 inline-flex justify-between text-lg font-semibold">
                <p>Appointment Fee</p>
                <p className="text-green-800 text-xl">₹699.00</p>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <p className="text-xl font-semibold mr-3">Select your mode of session</p>
                    <div className="border-2 h-0 border-gray-300 w-7/12"></div>
                </div>
                <div className="flex w-full mb-5">
                    <button className="border-2 border-gray-300 rounded-lg w-1/3 p-6 px-10 mx-2 flex flex-col justify-center items-center text-xl hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                    focus:bg-opacity-10 focus:ring-green-700 focus:text-green-700 font-semibold">In-Clinic <p className="text-sm font-normal">45-mins</p></button>
                    <button className="border-2 border-gray-300 rounded-lg w-1/3 p-6 px-10 mx-2 flex flex-col justify-center items-center text-xl hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                    focus:bg-opacity-10 focus:ring-green-700 focus:text-green-700 font-semibold">Video <p className="text-sm font-normal">45-mins</p></button>
                    <button className="border-2 border-gray-300 rounded-lg w-1/3 p-6 px-10 mx-2 flex flex-col justify-center items-center text-xl hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                    focus:bg-opacity-10 focus:ring-green-700 focus:text-green-700 font-semibold">Chat <p className="text-sm font-normal">10-mins</p></button>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <p className="text-xl font-semibold mr-3">Pick a Time slot</p>
                    <div className="border-2 h-0 border-gray-300 w-8/12"></div>
                    <div className="w-10 h-10 border-2 border-gray-300 rounded-full flex justify-center items-center">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-calendar-1767476-1502546.png" alt="" className="w-8 h-8 rounded-full" />
                    </div>
                </div>

                <div className="w-full py-4 px-10 border-2 rounded-lg border-gray-300 text-lg flex justify-center items-center">
                    <button className="border-2 border-gray-500 rounded-full h-5 w-5 p-3 pb-4 flex justify-center items-center"> « </button>
                    <button className="border-2 border-gray-300 rounded-lg w-1/3 p-6 px-6 mx-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                    focus:bg-opacity-10 focus:ring-green-700 focus:text-green-700 font-semibold">Mon, 10 Oct <p className="text-sm font-normal">10 slots</p></button>
                    <button className="border-2 border-gray-300 rounded-lg w-1/3 p-6 px-6 mx-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                    focus:bg-opacity-10 focus:ring-green-700 focus:text-green-700 font-semibold">Tue, 11 Oct <p className="text-sm font-normal">2 slots</p></button>
                    <button className="border-2 border-gray-300 rounded-lg w-1/3 p-6 px-6 mx-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                    focus:bg-opacity-10 focus:ring-green-700 focus:text-green-700 font-semibold">Wed, 12 Oct <p className="text-sm font-normal">3 slots</p></button>
                    <button className="border-2 border-gray-500 rounded-full h-5 w-5 p-3 pb-4 flex justify-center items-center"> » </button>
                </div>

                <div className="my-3 py-3 ">
                    <p className="px-7 text-xl font-semibold">Morning</p>
                    <div className="py-5 text-xl flex flex-wrap justify-start">
                        <button className="border-2 border-gray-300 rounded-2xl  py-4 px-4 m-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                      focus:text-white">
                            09:00 AM
                        </button>
                        <button className="border-2 border-gray-300 rounded-2xl  py-4 px-4 m-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                      focus:text-white">
                            09:30 AM
                        </button>
                        <button className="border-2 border-gray-300 rounded-2xl  py-4 px-4 m-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                      focus:text-white">
                            10:00 AM
                        </button>
                        <button className="border-2 border-gray-300 rounded-2xl  py-4 px-4 m-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                      focus:text-white">
                            10:15 AM
                        </button>
                        <button className="border-2 border-gray-300 rounded-2xl  py-4 px-4 m-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                      focus:text-white ">
                            10:45 AM
                        </button>
                    </div>
                </div>


                <div className="my-3 py-3 ">
                    <p className="px-7 text-xl font-semibold">Evening</p>
                    <div className="py-5 text-xl flex flex-wrap justify-start">
                        <button className="border-2 border-gray-300 rounded-2xl  py-4 px-4 m-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                      focus:text-white">
                            04:00 PM
                        </button>
                        <button className="border-2 border-gray-300 rounded-2xl  py-4 px-4 m-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                      focus:text-white">
                            04:15 PM
                        </button>
                        <button className="border-2 border-gray-300 rounded-2xl  py-4 px-4 m-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                      focus:text-white">
                            04:30 PM
                        </button>
                        <button className="border-2 border-gray-300 rounded-2xl  py-4 px-4 m-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                      focus:text-white">
                            04:45 PM
                        </button>
                        <button className="border-2 border-gray-300 rounded-2xl  py-4 px-4 m-2 flex flex-col justify-center items-center  hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600 focus:ring-2 focus:bg-green-700
                      focus:text-white ">
                            05:15 AM
                        </button>
                    </div>
                </div>

                <button className="w-full border-2 bg-green-800 text-white  mb-6 rounded-xl px-6 py-3 inline-flex justify-center text-lg font-semibold">
                    <p>Make an appointment</p>
                    
                </button>

            </div>
            </div>
        </>
    )
}