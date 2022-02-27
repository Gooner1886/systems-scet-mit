import React, { useContext } from "react";
import "../Citation/newCitation.css";
import { WithSubnavigation as PreLogin } from "../Navbar/PreLoginNavbar";
import { WithSubnavigation as PostLogin } from "../Navbar/Navbar";
import Logged from "../context";
import Footer from "../Footer";

const NewConferencePub = (props) => {
  const user = useContext(Logged);

  return (
    <>
      {user.value ? <PostLogin /> : <PreLogin />}

      <div className="recruitment__page">
        <div className="recruitment__info__div">
          <p className="recruitment__info__header">
            Add new Conference Publications
          </p>
          <p className="recruitment__info">
            Add and update your new Conference Publication or Research
            information if any to the form below.
          </p>
        </div>
        <div className="recruitment__form__div">
          <iframe
            title="RecruitmentForm"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf3UDMXgj2h8BbOiFjlbckYaBI9K00Yxl1SLm352FVvc0tvhA/viewform?embedded=true"
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

export default NewConferencePub;
