import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegFileAlt } from 'react-icons/fa';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdArrowOutward, MdOutlineHome } from 'react-icons/md';
import { FiUser, FiSend } from 'react-icons/fi';
import { HiOutlineReceiptTax } from 'react-icons/hi';
import { TfiLightBulb } from 'react-icons/tfi';
import { LiaBookSolid } from 'react-icons/lia';
import { PiEnvelopeSimpleOpen } from 'react-icons/pi';
import './Sidebar.css';
import RazorpayLogo from '../../assets/razorpay-logo.png';
import XLogo from '../../assets/x-logo.png';

const routes = [
  {
    path: '/home',
    name: 'Home',
    icon: <MdOutlineHome />,
  },
  {
    path: '/',
    name: 'Payouts',
    icon: <MdArrowOutward />,
  },
  {
    path: '/account',
    name: 'Account Statement',
    icon: <FaRegFileAlt />,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    icon: <FiUser />,
  },
  {
    path: '/payments',
    name: 'Vendor Payments',
    icon: <HiOutlineReceiptTax />,
  },
  {
    path: '/tax',
    name: 'Tax Payments',
    icon: <TfiLightBulb />,
  },
  {
    path: '/links',
    name: 'Payout Links',
    icon: <FiSend />,
  },
  {
    path: '/payroll',
    name: 'Payroll',
    icon: <PiEnvelopeSimpleOpen />,
  },
  {
    path: '/reports',
    name: 'Reports',
    icon: <LiaBookSolid />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? '200px' : '45px',
            transition: {
              duration: 0.5,
              type: 'spring',
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.img
                  src={RazorpayLogo}
                  alt="Razorpay Logo"
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                  style={{ width: '25px', height: '30px' }}
                  onClick={toggle}
                />
              )}
            </AnimatePresence>
            <div className="bars">
              {!isOpen && (
                <motion.img
                  src={XLogo}
                  alt="X Logo"
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                  style={{ width: '35px', height: '35px' }}
                  onClick={toggle}
                />
              )}
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              const isLineBreak = route.name === 'Contacts';
              const shouldRenderLineBreak =
                isLineBreak && index !== routes.length - 1;

              return (
                <div key={index} className="link-container">
                  <div className="link-wrapper">
                    <NavLink
                      to={route.path}
                      className={`link ${route.name === 'Payouts' && isOpen ? 'with-button' : ''}`}
                      activeClassName="active"
                    >
                      <div className="icon">{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                    {route.name === 'Payouts' && isOpen && (
                      <button className="new-button">New</button>
                    )}
                  </div>
                  {shouldRenderLineBreak && (
                    <hr
                      key={`line-break-${index}`}
                      className="thin-line"
                    />
                  )}
                </div>
              );
            })}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
