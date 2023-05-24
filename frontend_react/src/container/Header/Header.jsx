import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import "./Header.scss";
import { Divider } from "../../components";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

//TODO: Change info and icons according to you

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>🤩</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">ZAC</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Full Stack Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <div className="app__header-img">
          <img className="w-10" src={images.profile} alt="patrick" />
          {/* <img className="w-50" src={images.julieta} alt="julieta" />
          <img className="w-50" src={images.aftab} alt="aftab" />
          <img className="w-50" src={images.zac} alt="zac" /> */}
        </div>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.blob}
          alt="profile circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.dotnet, images.java, images.react].map((circle, index) => {
          return (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          );
        })}
      </motion.div>
      <Divider color="white" />
    </div>
  );
};

export default AppWrap(Header, "home", "bg-primary/5");
