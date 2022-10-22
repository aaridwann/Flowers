import React from "react";
import Color from "../../Constant/Colors/Color";
import BottomTab from "../BottomTab/BottomTab";
import NavbarComponent from "../Navbar";

function LayoutComponent({ children }) {
  return (
    <div className=" min-w-full min-h-screen flex bg-white ">
      <main className=" w-full 2xl:w-5/6 mx-auto min-h-screen flex flex-col items-center bg-white ">
        <NavbarComponent className={'z-50'} titleLink={'/'} txtColor={'#FFFFFF'} bgColor={Color.second} title={'She Needs Flowers'} />
        {children}
      </main>
      {/* <BottomTab/> */}
    </div>
  );
}

export default LayoutComponent;
