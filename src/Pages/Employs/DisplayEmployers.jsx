import PropTypes from 'prop-types';

const DisplayEmployers = ({ employers }) => {
    const { image_url, description, company_name, salary_per_hour, open_jobs_count, location } = employers
    return (
        <div className='shadow hover:shadow-xl p-6 bg-indigo-50'>
            <div className='flex gap-5 items-center'>
                <div className='p-5 rounded-full w-[100%]'>
                    <img className='w-full h-[100px]' src={image_url} alt="" />
                </div>
                <div className='space-y-2'>
                    <h2 className='font-medium text-xl '>{company_name}</h2>
                    <p className="">{description}</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-10  rounded-md mt-5'>
              <p  className='font-normal text-purple-600'>{location}</p>
              <p className='font-normal '>${salary_per_hour}/Hour</p>
              <p className='font-normal'>{open_jobs_count} open jobs</p>
            </div>
        </div>
    );
};

DisplayEmployers.propTypes = {
    employers: PropTypes.object
}

export default DisplayEmployers;