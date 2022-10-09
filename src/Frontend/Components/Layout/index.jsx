import React from "react";

function LayoutComponent({ children }) {
  return (
    <main className=" 2xl:w-5/6 mx-auto min-h-screen flex flex-col items-center bg-white ">
      {children}
    </main>
  );
}

export default LayoutComponent;
