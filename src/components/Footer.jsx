import { BsLaptopFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-slate-50">
      <footer>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <a href="../../index.html" className="flex items-center gap-2">
                <BsLaptopFill className="text-3xl text-secondary" />
                <span className=" text-2xl font-bold">E-Tutor</span>
              </a>
              <p className="text-gray-500 mt-3 mb-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                placeat quaerat doloribus odit perferendis autem blanditiis,
                nihil pariatur iusto accusamus.
              </p>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center border border-secondary rounded-full">
                  {" "}
                  <FaFacebook className="text-xl text-secondary" />
                </span>
                <span className="w-10 h-10 flex items-center justify-center border border-secondary rounded-full">
                  {" "}
                  <FaSquareTwitter className="text-xl text-secondary" />
                </span>
                <span className="w-10 h-10 flex items-center justify-center border border-secondary rounded-full">
                  {" "}
                  <FaSquareInstagram className="text-xl text-secondary" />
                </span>
                <span className="w-10 h-10 flex items-center justify-center border border-secondary rounded-full">
                  {" "}
                  <FaSquareGithub className="text-xl text-secondary" />
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Important Links</h2>
              <ul className="mt-3">
                <li className="text-base font-medium hover:text-secondary transition-colors cursor-pointer mb-1">
                  Home
                </li>
                <li className="text-base font-medium hover:text-secondary transition-colors cursor-pointer mb-1">
                  About
                </li>
                <li className="text-base font-medium hover:text-secondary transition-colors cursor-pointer mb-1">
                  Services
                </li>
                <li className="text-base font-medium hover:text-secondary transition-colors cursor-pointer">
                  Login
                </li>
              </ul>
            </div>
            <div>
              {" "}
              <h2 className="text-2xl font-bold">Company Links</h2>
              <ul className="mt-3">
                <li className="text-base font-medium hover:text-secondary transition-colors cursor-pointer mb-1">
                  Our Services
                </li>
                <li className="text-base font-medium hover:text-secondary transition-colors cursor-pointer mb-1">
                  Contact
                </li>
                <li className="text-base font-medium hover:text-secondary transition-colors cursor-pointer mb-1">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div>
              {" "}
              <h2 className="text-2xl font-bold">Resources</h2>
              <ul className="mt-3">
                <li className="text-base font-medium hover:text-secondary transition-colors cursor-pointer mb-1">
                  Home
                </li>
                <li className="text-base font-medium hover:text-secondary transition-colors cursor-pointer mb-1">
                  About
                </li>
                <li className="text-base font-medium hover:text-secondary transition-colors cursor-pointer mb-1">
                  Services
                </li>
                <li className="text-base font-medium hover:text-secondary transition-colors cursor-pointer">
                  Login
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="container">
        {" "}
        <div className="mt-4 text-center pb-7">
          <span className="w-full h-[0.5px] bg-black block"></span>
          <span className="mt-5 block text-lg">@Copyright 2024 ❤️‍🩹Rohan❤️‍🩹</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
