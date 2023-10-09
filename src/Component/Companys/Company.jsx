import Marquee from "react-fast-marquee";
import { FaAmazon, FaFacebook, FaGoogle,FaWallet,FaTencentWeibo, FaThemeco } from "react-icons/fa";

const Company = () => {
    return (
        <div data-aos="fade-up" className="w-[80%] mx-auto mt-10">
            <h2 className="text-3xl text-center font-semibold">Trusted Companies</h2>
            <Marquee className="bg-pink-50 p-4 rounded-lg mt-3">
                <div className="flex items-center gap-8">
                    <span className="flex items-center font-semibold text-zinc-500  gap-2 text-2xl"><FaGoogle className="text-lg"></FaGoogle> Google</span>
                    <span className="flex items-center  font-semibold text-zinc-500 gap-2 text-2xl"><FaAmazon className="text-lg"></FaAmazon> Amazon</span>
                    <span className="flex items-center font-semibold text-zinc-500  gap-2 text-2xl"><FaFacebook className="text-lg"></FaFacebook> Facebook</span>
                    <span className="flex items-center font-semibold text-zinc-500  gap-2 text-2xl"><FaWallet className="text-lg"></FaWallet> Walmart</span>
                    <span className="flex items-center font-semibold text-zinc-500  gap-2 text-2xl"><FaGoogle className="text-lg"></FaGoogle> Microsoft</span>
                    <span className="flex items-center font-semibold text-zinc-500  gap-2 text-2xl"><FaTencentWeibo className="text-lg"></FaTencentWeibo> Tesla</span>
                    <span className="flex items-center font-semibold text-zinc-500  gap-2 text-2xl"><FaThemeco className="text-lg"></FaThemeco> Tencent</span>
                </div>
            </Marquee>
        </div>
    )
}

export default Company;