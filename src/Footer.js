import React from "react";
import "./Footer.css";

export default function Footer() {
 return (
  <div className="container">
   <div className="Footer">
    <small>
     Brain- stormed by <em>Shirin Eldris</em> 🤖, {""}
     <a
      href="https://github.com/Sibidomaskuli/weathering-heights.git"
      className="purple"
      target="_blank"
      rel="noreferrer"
     >
      Open-Source on GitHub,
    </a>
     <a href="/"
      className="green"
      target="_blank"
      rel="noreferrer"
     >{" "}
     Netlify hosted
    </a>
    </small>
   </div>
  </div>
 );
}