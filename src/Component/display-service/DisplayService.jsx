
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';

const DisplayService = ({ service }) => {
    const { name, JobName, Posted, Expiration, location, Category, Salary, Experience, Gender, image } = service
    return (
        <div className='flex bg-indigo-50 rounded-xl items-center justify-center gap-5 shadow-md p-8 hover:shadow-xl'>
            <div className='w-[30%]'>
                <img className='w-[200px] h-[100px]' src={image} alt="" />
            </div>
            <div className='space-y-2 text-left'>
                <h2 className='font-semibold text-xl'>{JobName}</h2>
                <h2>{Expiration}</h2>
                <button className="btn bg-indigo-50  border-none  text-purple-500 font-semibold">View Detail
                    <FaArrowRight></FaArrowRight>
                </button>
            </div>
        </div>
    );
};

DisplayService.propTypes = {
    service: PropTypes.object

};

export default DisplayService;