import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CardsImg from "../../assets/credit-cards.webp";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company detail section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay:0.2 }}
            className="space-y-6"
          >
            <img className="max-w-[100px] invert" src={Logo} alt="" />
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                {" "}
                <FaMapLocation /> Noida, Uttar Pradesh
              </p>
            </div>
          </motion.div>
          {/* footer links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay:0.4 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            {/*  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
              </ul>
              </div>
              {/*  */}
            <div>
            <ul className="space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            </div>
            

          </motion.div>
          {/* social links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay:0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow us</h1>
            <div className="flex items-center gap-3 ">
            <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            {/* card */}
            <div className="space-y-2">
                <p>Payment Methods</p>
                <img
                  src={CardsImg}
                  alt="Credit Cards"
                />
  
            </div>
          </motion.div>
        </div>
        {/* copy right section  */}
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
            &copy; {new Date().getFullYear()} Soft-Drinks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
