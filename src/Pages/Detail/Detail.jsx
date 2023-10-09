import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import toast from "react-hot-toast";

const Detail = () => {

    const { id } = useParams()
    const idx = parseInt(id)
    const jobsData = useLoaderData()

    const [job, setJob] = useState([])

    const { JobName, Posted, Expiration, location, Category, Salary, Experience, Gender, image } = job

    useEffect(() => {
        const exits = jobsData.find(job => job.id === idx)
        setJob(exits)
    }, [jobsData, idx])


    const saveLocalStorage = () => {
        const appliedJob = []
        const haveLocalStorage = JSON.parse(localStorage.getItem('card'))
        if (!haveLocalStorage) {
            appliedJob.push(job)
            localStorage.setItem('card', JSON.stringify(appliedJob))
            toast("Good job!", "successful donation given", "success");
        } else {
            const exits = haveLocalStorage.find(appliedJob =>  appliedJob.id === idx);
            if (!exits) {
                appliedJob.push(...haveLocalStorage, job)
                localStorage.setItem('card', JSON.stringify(appliedJob))
                toast("success!", "successful added on applied", "success");
            } else {
                toast("bad thing!", "duplicate not allowed", "error");
            }
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex gap-10 items-center justify-center">
                <div className="bg-purple-50 p-10 rounded-xl w-[40%]">
                    <h2 className="font-semibold text-xl mb-2">Job details :</h2>
                    <div className="space-y-4">
                        <h2 className="flex justify-between">Job : <span className="text-purple-600 font-medium">{JobName}</span></h2>
                        <h2 className="flex justify-between">Posted : <span>{Posted}</span></h2>
                        <h2 className="flex justify-between">Expiration: <span>{Expiration}</span></h2>
                        <h2 className="flex justify-between"> Location: <span>{location}</span></h2>
                        <h2 className="flex justify-between"> Category: <span>{Category}</span></h2>
                        <h2 className="flex justify-between"> Salary: <span>{Salary}</span></h2>
                        <h2 className="flex justify-between"> Experience: <span>{Experience}</span></h2>
                        <h2 className="flex justify-between"> Gender: <span>{Gender}</span></h2>
                    </div>
                    <button onClick={saveLocalStorage} className="btn bg-purple-600 w-full mt-2 text-white rounded-xl">Apply Now</button>
                </div>
                <div className="w-[40%]">
                    <img className="w-full" src={image} alt="" />
                </div>
            </div>
            <h2 className="text-center mt-10 text-2xl font-semibold mb-2">Short Description About This Job</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis <br /> perspiciatis unde sed ea quisquam. Repellat ratione perspiciatis <br /> officiis
                atque delectus dicta, error sed sint modi totam <br /> assumenda asperiores, facilis exercitationem.</p>
        </div>
    );
};

export default Detail;