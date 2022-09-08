import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("Enter your text here");

  const handleUpClick = () => {
    //console.log("change to upperCase letter" + text);
    // setText("click on the convert uppercase button ");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    //console.log("type the letter here");
    setText(e.target.value);
  };

  return (
    <>
      <h2>{props.heading} </h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="exampleFormControlTextarea1"
          rows="10"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button
        className=" btn btn-primary my-2 rounded-pill"
        onClick={handleUpClick}
      >
        convert to UpperCase
      </button>
    </>
  );
}
