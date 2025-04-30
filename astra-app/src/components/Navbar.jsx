import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo, menu, close } from '../assets';
import { styles } from '../styles';
import { navLinks } from '../constants';

const Navbar = () => {
  //const [active, setActive] = useState("");
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <img src={logo} alt="logo" className="w-25 h-25" />

        <ul className="list-none hidden sm:flex flex-row gap-5">
          {navLinks.map((link) => (
            <li
            key={link.id}
            className={`${
              location.pathname === `/${link.id}`
                ? "border-b-2 border-black text-black"
                : "text-gray-600"
            } flex justify-center items-center w-20 h-15 hover:text-gray-700 text-[18px] font-medium cursor-pointer`}
          >
            <Link to={`/${link.id}`}>{link.title}</Link>
          </li>
          ))}
        </ul>
        
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu }
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    location.pathname === `/${link.id}` //active === link.title
                      ? "text-white"
                      : "text-gray-400"
                  }  hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`/${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
