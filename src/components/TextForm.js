import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here ");

  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    // setText("You have clicked on handleupclick");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    //console.log("LowerCase was clicked" + text);
    // setText("You have clicked on handleLoclick");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h2>{props.Heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary rounded-pill mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary rounded-pill mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-danger rounded-pill" onClick={handleClClick}>Clear text</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
