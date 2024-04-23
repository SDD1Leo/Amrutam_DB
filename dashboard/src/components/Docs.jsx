import "../components/Anim.css"

export default function Docs(props) {

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 260;

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
            <section class="text-gray-600 body-font reveal">
                <div class="container px-5 py-11 mx-auto w-9/12 flex flex-row justify-center ">
                    <div class="h-full flex flex-col items-center text-center bg-amber-100 border-2 border-gray-200 rounded-2xl py-6 px-12 ">
                        <img alt="testimonial" class=" w-32 h-32 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1599842057874-37393e9342df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGxhZHklMjBkb2N0b3J8ZW58MHx8MHx8fDA%3D" />

                        <div className="bg-black rounded-full w-1/4 text-white pb-1">4.5 ⭐</div>
                        <div class="w-full my-4">
                            <h2 class="title-font text-2xl font-semibold text-gray-900">{props.name}</h2>
                            <h5 class="text-gray-500 ">💊 Male-Female Infertility</h5>
                            <h5 class="text-gray-500 ">🎓 7-Years of Experience</h5>
                            <h5 class="text-gray-500 ">🖹 Speaks:English,Hindi,Marathi</h5>
                        </div>
                        <div className="flex flex-row mb-6 w-full">
                            <button class="inline-flex items-center border-black border-2 pb-2 py-1 px-3 focus:outline-none  rounded-lg text-sm mt-4 md:mt-0 mx-2 ">Video Consultation ₹800
                            </button>
                            <button class="inline-flex items-center border-black border-2 pb-2 py-1 px-3 focus:outline-none  rounded-lg text-sm mt-4 md:mt-0 mx-2 ">Chat Consultation free
                            </button>
                        </div>

                        <button class="inline-flex items-center border-green-800 border-2 pb-2 py-1 px-3 bg-white focus:outline-none hover:bg-green-700 hover:text-white rounded-lg text-base mt-4 md:mt-0 mx-0 w-full justify-center mb-3  ">View Profile
                        </button>
                        <button class="inline-flex items-center border-green-800 border-2 pb-3 py-2 px-3 text-white bg-green-800 focus:outline-none hover:bg-green-700 hover:text-white rounded-lg text-base mt-4 md:mt-0 mx-0 w-full justify-center mb-3  ">Book a Consultation
                        </button>
                    </div>

                </div>


            </section>
        </>
    )
}