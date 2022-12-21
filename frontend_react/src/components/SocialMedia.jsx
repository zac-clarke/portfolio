import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div className="group">
      <a href="https://www.linkedin.com/" target={"_blank"}>
        <BsLinkedin className="group-hover:text-white" />
      </a>
    </div>
    <div className="group">
      <a href="https://github.com/" target={"_blank"}>
        <BsGithub className="group-hover:text-white" />
      </a>
    </div>
  </div>
);

export default SocialMedia;
