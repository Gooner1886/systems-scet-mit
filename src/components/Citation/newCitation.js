import React, {useContext} from "react";
import "./newCitation.css";
import {WithSubnavigation as PreLogin} from "../Navbar/PreLoginNavbar";
import {WithSubnavigation as PostLogin} from "../Navbar/Navbar"
import Logged from "../context";
import Footer from "../Footer";

const NewCitation = (props) => {
    const user = useContext(Logged);

    return (
        <>
            {user.value?<PostLogin/>:<PreLogin/>}

            <div className="recruitment__page">
                <div className="recruitment__info__div">
                    <p className="recruitment__info__header">
                        Add new Publication & Citations Record
                    </p>
                    <p className="recruitment__info">
                        Add and update your new Citations or Research information if any to the form below.
                    </p>
                </div>
                <div className="recruitment__form__div">
                    <iframe
                        title='RecruitmentForm'
                        src="https://docs.google.com/forms/d/e/1FAIpQLSclGMNtDfSQwSK44XBmfccedITR3Xy-em3_mHzJbk75JQ22bw/viewform?embedded=true"
                        width="50%"
                        height="100%"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewCitation;
