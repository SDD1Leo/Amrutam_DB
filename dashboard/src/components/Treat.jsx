export default function Treat() {
    return (
        <>
            <div className="w-full border-2 border-amber-100 mb-10 rounded-lg revealx">
                <h2 className="w-full bg-gradient-to-r from-amber-100 text-black text-2xl py-2 px-5 inline-flex justify-between  ">
                    The Concerns I Treat
                </h2>
                <div className=" p-7 w-full text-gray-800 text-md flex flex-wrap justify-start ">
                    <div className="bg-gray-100 rounded-full px-5 py-2 mb-3 mr-3">Skin Treatment</div>
                    <div className="bg-gray-100 rounded-full px-5 py-2 mb-3 mr-3">Pregnancy</div>
                    <div className="bg-gray-100 rounded-full px-5 py-2 mb-3 mr-3">Period Doubts</div>
                    <div className="bg-gray-100 rounded-full px-5 py-2 mb-3 mr-3">Endometriosis</div>
                    <div className="bg-gray-100 rounded-full px-5 py-2 mb-3 mr-3">Pelvic pain</div>
                    <div className="bg-gray-100 rounded-full px-5 py-2 mb-3 mr-3">Ovarian Cyst</div>
                    <button className="bg-white border-gray-300 hover:bg-gray-300 border-2 text-green-800 rounded-full px-5 py-2 mb-3 mr-3">+ 5 More</button>

                </div>
            </div>
        </>
    )
}