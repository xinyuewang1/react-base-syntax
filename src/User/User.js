import React from "react";

const userInput = props => {
  return <input type="text" onChange={props.changed} value={props.name} />;
};

const userOutput = props => {
  return (
    <div>
      <p> I'm {props.name}</p>
      <p>Thank you. :)</p>
    </div>
  );
};
export { userInput, userOutput };
