import React from 'react';
// import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`container mx-auto ${classNames}`}>
      {/* <SocialMedia /> */}
      <div className="flex flex-col items-center justify-center w-[358px] md:w-full">
        <Component />

        <div className="copyright">
          <p className="p-text">@2020 MICHAEL</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      {/* <NavigationDots active={idName} /> */}
    </div>
  );
};

export default AppWrap;