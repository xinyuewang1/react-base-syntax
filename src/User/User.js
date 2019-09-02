import React from "react";

// It would be a good practice to put these two in separate folders.
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
