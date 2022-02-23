import React, {useContext} from "react";
import "./newCitation.css";
import {WithSubnavigation as PreLogin} from "../../Navbar/PreLoginNavbar";
import {WithSubnavigation as PostLogin} from "../../Navbar/Navbar"
import Logged from "../../context";
import Footer from "../../Footer";

const ResearchPub = (props) => {
    const user = useContext(Logged);

    return (
        <>
            {user.value?<PostLogin/>:<PreLogin/>}

            <div className="recruitment__page">
                <div className="recruitment__info__div">
                    <p className="recruitment__info__header">
                        Add new Projects
                    </p>
                    <p className="recruitment__info">
                        Add and update new research project information if any to the form below.
                    </p>
                </div>
                <div className="recruitment__form__div">
                    <iframe
                        title='RecruitmentForm'
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdtNV0p38glRqNY6HICAkf29a40EoirfykkcsN6D_wnn7TSFg/viewform?usp=sf_link"
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

export default ResearchPub;
