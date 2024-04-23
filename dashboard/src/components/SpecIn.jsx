import "./Anim.css"

export default function SpecIn() {

    function revealx() {
        var reveals = document.querySelectorAll(".revealx");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 300;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", revealx);

    return (
        
        <>
            <div className="w-full border-2 border-amber-100 mb-10 rounded-lg revealx">
                <h2 className="w-full bg-gradient-to-r from-amber-100 text-black text-2xl py-2 px-5 inline-flex justify-between  ">
                    I Specialize In
                </h2>
                <div className=" p-7 w-full text-gray-400 text-md flex flex-wrap justify-start ">
                    <div className=" mr-3 flex flex-col items-center  ">
                        <img alt="testimonial" class=" w-32 h-32 rounded-full object-cover object-center inline-block border-2 border-amber-200 bg-gray-100" src="https://img.freepik.com/free-vector/gradient-menopause-infographic_23-2149352146.jpg?t=st=1713445286~exp=1713448886~hmac=31787fdb08a92fb147d99c14523a3add5857e28b3e0f2a3b5bccd0a939d8e514&w=1060" />
                        <p className="text-lg">
                            Women's Health
                        </p>
                    </div>
                    <div className=" mr-3  flex flex-col items-center ">
                        <img alt="testimonial" class=" w-32 h-32 rounded-full object-cover object-center inline-block border-2 border-amber-200 bg-gray-100" src="https://img.freepik.com/free-vector/spa-woman-applying-facial-mask_1308-120826.jpg?t=st=1713445409~exp=1713449009~hmac=1895e47547ec27b8e218504dcebc193bc22eee4ef15b9a2f7937ee660c9d45c4&w=740" />
                        <p className="text-lg">
                            Skin Care
                        </p>
                    </div>
                    <div className=" mr-3 flex flex-col items-center ">
                        <img alt="testimonial" class=" w-32 h-32 rounded-full object-cover object-center inline-block border-2 border-amber-200 bg-gray-100" src="https://img.freepik.com/premium-vector/boost-your-immune-system-with-shield_23-2148571601.jpg?w=740" />
                        <p className="text-lg">
                            Immunity
                        </p>
                    </div>
                    <div className=" mr-3 flex flex-col items-center  ">
                        <img alt="testimonial" class=" w-32 h-32 rounded-full object-cover object-center inline-block border-2 border-amber-200 bg-gray-100" src="https://img.freepik.com/free-vector/hair-spray-concept-illustration_114360-6470.jpg?t=st=1713445680~exp=1713449280~hmac=7387ceafdb713c4e63dcce53c047f771df39e97a9bccedd64249e4a2d42541a9&w=740" />
                        <p className="text-lg">
                            Hair Care
                        </p>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}