import React from "react";
import Logo from "../../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const NavBar = () => {
  // ` nav bar menu list
  const NavBarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Categories",
      link: "/categories",
    },
    {
      id: 3,
      title: "Blog",
      link: "/blog",
    },
    {
      id: 4,
      title: "About",
      link: "/about",
    },
    {
      id: 5,
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="text-white py-8 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* logo section */}
        <div>
          <img className="max-w-[100px] invert" src={Logo} alt="Logo" />
        </div>
        {/* Menu section hidden*/}
        <div className=" hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {/* map through NavBarMenu */}
            {NavBarMenu.map(({ id, title, link }) => (
              <li className="">
                {/* animate menu item on hover */}
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    scale: 5,
                    zIndex: 10,
                    followSpeed: 1.5,
                    mixBlendMode:"difference"
                  }}
                >
                  <a
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                    key={id}
                    href={link}
                  >
                    {title}
                  </a>
                </UpdateFollower>
              </li>
            ))}
            {/* user */}
            <UpdateFollower
             mouseOptions={{
              backgroundColor: "white",
              scale: 5,
              zIndex: 10,
              followSpeed: 1.5,
              mixBlendMode:"difference"
            }}>
            <button className="text-xl ps-14">
              <FaRegUser />
            </button>
            </UpdateFollower>
          </ul>
        </div>
        {/* Hamburger Icon */}
        <div className=" md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
