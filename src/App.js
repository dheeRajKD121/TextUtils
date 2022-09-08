import React from "react";
import "./App.css";
// import About from "./components/About";
// import Form from "./components/Form";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" AboutText="About Us" /> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm Heading="Enter your text below to analyze" />
      </div>
      {/* <div className="container my-3">
        <Form heading="Enter your text here to analyze" />      //<==duplicate of TextForm for practice
      </div> */}
      {/* <About /> */}
    </>
  );
}
export default App;
