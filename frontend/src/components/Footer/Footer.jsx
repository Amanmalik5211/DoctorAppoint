import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/watch?v=lGfTQ-YFjIE",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a doctor",
  },
  {
    path: "/",
    display: "Request an Appoinment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="pb-16 pt-10 bg-gray-100">
        <div className="container">
          <div className="flex  justify-between flex-col md:flex-row flex-wrap gap-[30px]">
            <div>
              <img src={logo} alt="" />

              <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
                Copyright © {year} developed by Aman Malik all right reserved.
              </p>

              <div className="flex item-center gap-3 mt-4">
                {socialLinks.map((link, index) => (
                  <Link
                    to={link.path}
                    key={index}
                    className="w-9 h-9 border border-solid border-[#181A1E] pt-2
                    rounded-full flex item-center justify-center group hover:bg-primaryColor hover:boder-none  "
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mr-10">
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                Quick Links
              </h2>
              <ul>
                {quickLinks01.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                      {item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mr-10">
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                Looking For
              </h2>
              <ul>
                {quickLinks02.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                      {item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mr-16">
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                Support
              </h2>
              <ul>
                {quickLinks03.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                      {item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
