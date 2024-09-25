import { React, useEffect, useRef,useContext } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  // {
  //   path: "/contact",
  //   display: "Contact",
  // },
  {
    path: "/location",
    display: "Location",
  },
];
const Header = () => {
 const headerRef= useRef(null);
 const menuRef = useRef(null);
 const {user, role,token,photo} = useContext(authContext);
 
 const profileUrl = role === 'doctor' ? `${BASE_URL}/doctors/profile/me` : `${BASE_URL}/users/profile/me`;
 const { data: userData, loading, error } = useGetProfile(profileUrl);
 

 const handleStickyHeader = ()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('sticky_header')
    }else{
      headerRef.current.classList.remove('sticky_header')
    }
  })
 }

 const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};


 useEffect (()=>{
  handleStickyHeader()
  return()=>window.removeEventListener('scroll',handleStickyHeader)
 }, [])

 const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link to="/">
            <div>
              <img src={logo} alt="" />
            </div>
          </Link>

          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* header profile */}
          <div className="flex item-center gap-4">

           {
            token && user ?  
           <div>
            <Link to={`${role == 'doctor' ? '/doctors/profile/me':'/users/profile/me'}`} className="flex items-center gap-3">
              <figure className="w-[41px] h-[41px] rounded-full overflow-hidden flex items-center justify-center ">
                <img src={userData.photo} className="w-full rounded-full object-cover" alt="" />
              </figure>

              {/* <h2 className="hover:text-primaryColor">{capitalizeFirstLetter(user?.name)}</h2> */}
               
            </Link>
          </div> :
            <Link to="/login">
            <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[38px] flex items-center justify-center rounded-[50px]">
              Login
            </button>
          </Link>

           }

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
