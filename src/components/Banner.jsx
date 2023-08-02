import Navbar from "./Navbar"

const Banner = () => {
    return <section className='relative'>
        <div className="backdrop_img bg-center bg-cover bg-no-repeat bg-hero-pattern w-full bg-slate-900 text-white">
            <Navbar />
            <div className=" grid items-center bg-transparent-30 min-h-[70vh]">
                <div className="content container_wrapper lg:py-24 space-y-8 py-10 md:space-y-10 lg:space-y-12">
                    <h2 className='mx-auto drop-shadow-xl shadow-black text-5xl md:text-6xl lg:text-7xl font-bold font-inter max-w-4xl'>Reach for the Stars with SpaceX!</h2>
                    <h4 className='mx-auto drop-shadow-xl shadow-black text-lg max-w-[300px] md:max-w-xl lg:max-w-3xl md:text-2xl lg:text-4xl font-normal font-inter'>Explore the Universe's Wonders - Rockets, Capsules & More!
                        Blast off into an Extraordinary Journey!</h4>
                </div>
            </div>
        </div>
    </section>
}


export default Banner;