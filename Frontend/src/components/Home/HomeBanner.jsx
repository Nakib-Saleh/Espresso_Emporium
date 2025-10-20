import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div className="banner  md:h-[550px] flex items-center justify-center rancho p-2">
           <div className="md:w-1/2"></div>
           <div className="md:w-1/2">
            <h1 className="text-white font-bold  text-2xl md:text-[45px]">Would you like a Cup of Delicious Coffee?</h1>
            <p className="text-white mt-3">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className="btn btn-secondary rounded-none mt-3 bg-[#E3B577] text-black border-[#E3B577] hover:bg-transparent hover:text-white hover:border-white">Learn More</button>
           </div>
        </div>
    );
};

export default HomeBanner;