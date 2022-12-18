import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
// import './About.scss';
import './About.css';
// import { urlFor, client } from '../../client';


const abouts = [
  { title: 'Web Development', description: 'I am a good web developer', imgUrl: "/about/1.png" },
  { title: 'Web Design', description: 'I am a good web designer', imgUrl: "/about/2.png" },
  { title: 'UI/UX', description: 'I am a good UI/UX', imgUrl: "/about/3.png" },
  { title: 'Web Animations', description: 'I am a good web animator', imgUrl: "/about/4.png" },
]


const About = () => {

  return (
    <>
      <div className='bg-white'>
        <h2 className="font-dmSans text-[44px] font-extrabold text-center leading-[3rem]">I Know that <span className='font-extrabold text-secondary'>Good Design</span> <br />means  <span className='font-extrabold text-secondary'>Good Business</span></h2>

        <div className="flex justify-center flex-wrap mt-[32px]">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="w-[190px] md:w-[370px] flex flex-col gap-[2rem] m-[2rem]"
              key={about.title + index}
            >
              <img className="rounded-[15px]" src={(about.imgUrl)} alt={about.title} />
              <h2 className="mt-[20px] font-bold" >{about.title}</h2>
              <p className="text-sm text-align text-gray mt-[10px]">{about.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);