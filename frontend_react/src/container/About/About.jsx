import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper/";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Smart Work</span> <br />
        means <span>Solid Results</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img
              className="rounded-[15px]"
              src={urlFor(about.imgUrl)}
              alt={about.title}
            />
            <h2 className="bold-text mt-[20px]">{about.title}</h2>
            <p className="p-text mt-[10px]">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "bg-white/5");
