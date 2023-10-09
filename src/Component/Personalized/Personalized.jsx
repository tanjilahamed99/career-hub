import { FaGem,FaBook } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const Personalized = () => {
    return (
        <div  className="my-20">
            <h2 className="font-bold text-3xl text-center lg:px-20">Your Personalized Job Search Assistant</h2>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 px-4 lg:grid-cols-3 gap-10 items-center justify-center mt-10">
                <div className="text-center p-5 bg-purple-50 rounded-md">
                    <FaGem className="text-purple-600 text-8xl p-5 mb-4 bg-pink-50 rounded-full mx-auto"></FaGem>
                    <h2 className="font-semibold mb-2 text-xl">Extensive Job Listings</h2>
                    <p>Extensive job listings: Many roles, industries, and locations, offering diverse opportunities for job seekers</p>
                </div>
                <div className="text-center p-5 bg-purple-50 rounded-md">
                    <FaBook className="text-purple-600 text-8xl p-5 mb-4 bg-pink-50 rounded-lg mx-auto"></FaBook>
                    <h2 className="font-semibold mb-2 text-xl">Personalized Options</h2>
                    <p>Personalized job options: Network, use LinkedIn, job search engines, tailor applications, and seek professional</p>
                </div>
                <div className="text-center p-5 bg-purple-50 rounded-md">
                    <TbTargetArrow className="text-purple-600 text-8xl p-5 mb-4 bg-pink-50 rounded-full mx-auto"></TbTargetArrow>
                    <h2 className="font-semibold mb-2 text-xl">Expert Guidance</h2>
                    <p>Expert guidance: Skilled advice and insights for informed decisions and personal/professional growth</p>
                </div>
            </div>
        </div>
    );
};

export default Personalized;