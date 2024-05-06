
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
    return (
        <>
            <div className="howitworks">
                <div className="container">
                    <h3>How JobZee Works</h3>
                    <div className="banner">
                        <div className="card">
                            <FaUserPlus />
                            <p>Create Account</p>
                            <p>
                                Please register yourself as a Employer or Jobseeker.
                            </p>
                        </div>
                        <div className="card">
                            <MdFindInPage />
                            <p>Find a Job/Post a Job</p>
                            <p>
                                You can find or post a job according to your role.
                            </p>
                        </div>
                        <div className="card">
                            <IoMdSend />
                            <p>Apply For Job/Recruit Suitable Candidates</p>
                            <p>
                                Now you can Apply for a job or Recruit a candidate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowItWorks;