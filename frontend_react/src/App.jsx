import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    //DO NOT include social icons,side dots or copyright footer on these pages
    //we will do that after, on the global scale
    <div className="app">
      {/* TODO: assigned to Zac */}
      <Navbar />
      {/* TODO: assigned to Aftab */}
      <Header />
      {/* TODO: assigned to Patrick */}
      <About />
      {/* TODO: assigned to Julieta */}
      <Work />
      {/* TODO: assigned to Aftab */}
      <Skills />
      {/* TODO: assigned to Patrick */}
      <Testimonial />
      {/* TODO: assigned to Julieta */}
      <Footer />
    </div>
  );
}

export default App;
