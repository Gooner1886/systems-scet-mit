import React from "react";

const Club = (props) => {
  console.log(props.summary);
  return (
    <div>
      <h1>Club content will come here!</h1>
      <p>{props.summary}</p>
      <a href={props.events}>Events</a>
      <a href={props.achievements}>Achievements</a>
    </div>
  );
};

export default Club;
