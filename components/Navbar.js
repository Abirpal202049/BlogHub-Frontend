import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="text-gray-300 body-font bg-slate-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-extralight items-center text-gray-500 mb-4 md:mb-0">
            
            <img src="https://res.cloudinary.com/duavagcwx/image/upload/v1657389034/22520079_3c4dd1719a.jpg?updated_at=2022-07-09T17:50:35.316Z" className="w-10 h-10 rounded-full scale-125" alt="" />
            <span className="ml-3 text-2xl">TargetTechnology</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-100">Home</a>
            <a className="mr-5 hover:text-gray-100">About</a>
            <a className="mr-5 hover:text-gray-100">Works</a>
            <a className="mr-5 hover:text-gray-100">Blogs</a>
            <a className="mr-5 hover:text-gray-100">Conatct</a>
          </nav>
          
        </div>
      </header>
    </>
  );
}
