import AboutMe from "../components/AboutMe";
import Appointment from "../components/Appointment";
import Exp from "../components/Exp";
import Reviews from "../components/Reviews";
import SpecIn from "../components/SpecIn";
import Treat from "../components/Treat";


export default function DocInfo() {



    return (
        <>
            <section className="flex flex-col p-12 relative  " >
                <div className="docinfo w-full h-32 bg-green-800 opacity-20  rounded-md"></div>
                <div className="docinfo w-full h-32 bg-amber-100  rounded-md">
                    <div className="w-full h-32 ">
                        <div className="h-32 w-32 m-8 rounded-full border-4 border-white absolute bottom-12 flex ">
                            <img className="rounded-full" src="https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/6431025c-ec6b-4006-b95b-7ef27c671bbb/71abcc42-af00-4416-b793-e1a924751685.png" alt="" />

                        </div>
                        <div className=" inline-flex items-center h-32 w-full justify-between pl-36">
                            <div className="flex flex-col mx-20">
                                <p className="text-xl font-semibold">Dr. Bruce Willis <a className="">☑</a></p>
                                <p className="text-green-800 text-lg font-medium ">Gynecologist</p>
                                <p className="text-lg font-medium ">4.2⭐⭐⭐⭐</p>
                            </div>

                            <div className="flex mx-10">
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-green-800 font-medium text-lg">Followers</p>
                                    <p className="text-xl font-semibold">850</p>
                                </div>
                                <div className="flex flex-col justify-center items-center mx-20">
                                    <p className="text-green-800 font-medium text-lg">Following</p>
                                    <p className="text-xl font-semibold">18K</p>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-green-800 font-medium text-lg">Posts</p>
                                    <p className="text-xl font-semibold">250</p>
                                </div>
                            </div>

                            <button class="inline-flex items-center border-green-800 border-2 pb-4  py-3 px-16 focus:outline-none hover:bg-green-700 hover:text-white rounded-lg font-semibold text-xl mt-4 md:mt-0 mx-20 ">Book an Appointment
                            </button>
                        </div>


                    </div>
                </div>
            </section>


            <section className="flex " >
                <div className=" w-1/2 mt-10 mb-8 ml-12 mx-5 rounded-md">
                    <AboutMe />
                    <SpecIn />
                    <Treat />
                    <Exp />
                    <Reviews />
                </div>

                <div className=" w-1/2  ">
                    <Appointment />
                </div>
            </section>
        </>
    )
}