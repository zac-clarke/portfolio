import React from "react";

const NavigationDots = ({ active }) => {
  console.log(active);
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map((item, index) => (
        <a href={`#${item}`} key={item + index} className={`app__navigation-dot  ${active === item ? "bg-primary" : "bg-secondary/10"}`} />
      ))}
    </div>
  );
};

export default NavigationDots;
