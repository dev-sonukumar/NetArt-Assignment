import React from "react";
import { FaFacebook, FaGlobe } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const SubFooter = () => {
  return (
    <div className="subFooter flex container">
      <ul className="flex ">
        <li>
          <IoCall className="icons phone-icon" />
          <a href="">Toll free 1800 200 1234</a>
        </li>
        <li>
          <FaFacebook className="icons" />
          <a href="">www.facebook.com/cripumps</a>
        </li>
        <li>
          <FaGlobe className="icons" />
          <a href="">www.crigroups.com</a>
        </li>
      </ul>
    </div>
  );
};

export default SubFooter;
