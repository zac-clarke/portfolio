import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
// import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  if (!testimonials.length) return null;

  /* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.ImgURL)} alt={brand.name} />
          </motion.div>
        ))}
      </div> */

  return (
    <>
      <div className='flex flex-col w-full mt-20'>
        <div className="w-3/4 min-h-[210px] flex p-[2rem] rounded-[15px] ease-in-out app__flex bg-white mx-auto md:w-[450px] justify-center place-items-center flex-col sm:flex-row shadow-[0_0_30px_rgba(0,0,0,0.1)]">
          <img className='w-[100px] h-[100px] rounded-[15px] object-cover' src={urlFor(testimonials[currentIndex].imageurl)} alt={testimonials[currentIndex].name} />
          <div className="flex flex-col justify-around item-start flex-1 h-full px-8 text-left">
            <p className="text-lg p-text">{testimonials[currentIndex].feedback}</p>
            <div>
              <h4 className="font-semibold mt-8 bold-text">{testimonials[currentIndex].name}</h4>
              <h5 className="font-normal mt-[5px] p-text">{testimonials[currentIndex].company}</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 app__testimonial-btns app__flex">
        <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full m-4 transition-[background] duration-[0.3s] ease-in-out bg-white hover:bg-secondary" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
          <HiChevronLeft />
        </div>

        <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full m-4 transition-[background] duration-[0.3s] ease-in-out bg-white hover:bg-secondary" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
          <HiChevronRight />
        </div>
      </div>
    </>
  )
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'bg-primary',
);
