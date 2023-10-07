import { FaArrowRight } from "react-icons/fa";
const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full gap-5 justify-around items-center">
                <img src={'https://i.ibb.co/42RF9S2/pngwing-com-1.png" '} className="w-1/2 h-[500px]" />
                <div className="flex-1 space-y-4 ">
                    <h2 className="font-bold text-6xl leading-tight "><span className="text-purple-600">Find</span> out what you like doing best</h2>
                    <p className="font-medium text-[#000]">Career is an online platform that serves as a marketplace connecting job seekers and employers.</p>
                    <div className="flex gap-3">
                        <button className="btn bg-purple-600 text-white">Browse Job</button>
                        <button className="btn border-none bg-base-100 text-purple-500 font-semibold">Employers
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative gap-5 justify-around items-center w-full">
                <div className="flex-1 space-y-4 text-right">
                    <h2 className="font-bold text-6xl leading-tight "><span className="text-purple-600">Nothing</span> will work unless you do</h2>
                    <p className="font-medium text-[#000]">Career is an online platform  that serves as a  marketplace <br /> connecting job  seekers and employers.</p>
                    <div className="flex gap-3 justify-end">
                        <button className="btn border-none bg-base-100 text-purple-500 font-semibold">Employers
                            <FaArrowRight></FaArrowRight>
                        </button>
                        <button className="btn bg-purple-600 text-white">Browse Job</button>
                    </div>
                </div>
                <img src={'https://i.ibb.co/NY0BGGV/pngwing-com-2.png'} className="w-1/2 h-[600px]" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item gap-5 relative w-full justify-around items-center">
                <img src={'https://i.ibb.co/m87RqDm/pngwing-com-8.png'} className="w-1/2 h-[500px]" />
                <div className="flex-1 space-y-4 ">
                    <h2 className="font-bold text-6xl leading-tight ">If <span className="text-purple-600">opportunity</span> doesn’t knock, build a door</h2>
                    <p className="font-medium text-[#000]">Career is an online platform that serves as a marketplace connecting job seekers and employers.</p>
                    <div className="flex gap-3">
                        <button className="btn bg-purple-600 text-white">Browse Job</button>
                        <button className="btn border-none bg-base-100 text-purple-500 font-semibold">Employers
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative gap-5 w-full justify-around items-center">
                <div className="flex-1 space-y-4 text-right">
                    <h2 className="font-bold text-6xl leading-tight ">The best revenge is massive <span className="text-purple-600">success</span></h2>
                    <p className="font-medium text-[#000]">Career is an online platform that serves as a marketplace <br /> connecting job seekers and employers.</p>
                    <div className="flex gap-3 justify-end">
                        <button className="btn border-none bg-base-100 text-purple-500 font-semibold">Employers
                            <FaArrowRight></FaArrowRight>
                        </button>
                        <button className="btn bg-purple-600 text-white">Browse Job</button>
                    </div>
                </div>
                <img src={'https://i.ibb.co/zQ9WPvx/pngwing-com-3.png'} className="w-1/2 h-[550px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;