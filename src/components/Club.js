import React from "react";
import { useParams } from "react-router";

const Club = (props) => {
  const { clubNo } = useParams();
/*   console.log(clubNo);
  console.log(props.clubDetails); */
  const currentClubArray = props.clubDetails.filter(
    (club) => club.clubNo == clubNo
  );
/*   console.log(currentClubArray); */
  return (
    <div>
      <h1 style={{fontSize: '20px'}}>Club content will come here!</h1>
      <br />
      <p style={{fontSize: '20px'}}>{currentClubArray[0].summary}</p>
      <br />
      <a href={currentClubArray[0].events} style={{color: 'red', fontSize: '20px'}}>Events</a>
      <br />
      <a href={currentClubArray[0].achievements} style={{color: 'green', fontSize: '20px'}}>Achievements</a>
      <br />
    </div>
  );
};

export default Club;
