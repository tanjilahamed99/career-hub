import { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import DisplayAppliedJobs from "../DisplayAppliedJobs/DisplayAppliedJobs";

const AppliedJob = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const [seeAll, setSeeAll] = useState(false)
    const [noDataFound, setNoDataFound] = useState(false)

    useEffect(() => {
        const cardData = JSON.parse(localStorage.getItem('card'))
        if (cardData) {
            setAppliedJobs(cardData)
        } else {
            setNoDataFound(true)
        }
    }, [])

    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto mt-10">
                {noDataFound ? <h2 className="font-bold text-5xl mt-52 text-center">No Data Found</h2> :
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center px-5">
                        {
                            seeAll ? appliedJobs.map((job,idx) => <DisplayAppliedJobs key={idx} job={job}></DisplayAppliedJobs>) :
                                appliedJobs.slice(0, 4).map((job,idx) => <DisplayAppliedJobs key={idx} job={job}></DisplayAppliedJobs>)
                        }
                    </div>}

                {
                    appliedJobs?.length > 4 && <button onClick={() => setSeeAll(!seeAll)} className="px-4 py-3 bg-[#009444] rounded-md text-white mx-auto flex my-10">{seeAll ? 'show less' : "show all"}</button>
                }
            </div>

        </div>
    );
};

export default AppliedJob;