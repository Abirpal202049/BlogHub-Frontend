import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsWhatsapp,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-300 body-font bg-slate-900">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-500">
            <img
              src="https://res.cloudinary.com/duavagcwx/image/upload/v1657389034/22520079_3c4dd1719a.jpg?updated_at=2022-07-09T17:50:35.316Z"
              className="w-10 h-10 rounded-full scale-110"
              alt=""
            />
            <span className="ml-3 text-xl font-extralight">
              TargetTechnology
            </span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Target_Technology —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @edulearn
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <BsInstagram />
            </a>
            <a className="ml-3 text-gray-500">
              <BsFacebook />
            </a>
            <a className="ml-3 text-gray-500">
              <BsLinkedin />
            </a>
            <a className="ml-3 text-gray-500">
              <BsWhatsapp />
            </a>
            <a className="ml-3 text-gray-500">
              <BsTwitter />
            </a>
            <a className="ml-3 text-gray-500">
              <BsYoutube />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
