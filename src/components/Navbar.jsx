import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('');
  return (
    <div>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl margin-x-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Syket Bhattachergee
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks?.map((link) => {
              return (
                <li
                  key={link?.id}
                  className={`${
                    active === link?.title ? 'text-white' : 'text-secondary'
                  } text-medium hover:text-white text-[18px] cursor-pointer`}
                  onClick={() => setActive(link?.title)}
                >
                  <a href={`#${link?.id}`}>{link?.title}</a>
                </li>
              );
            })}
          </ul>
          {/* // For Mobile Navigation */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 black-gradient absolute top-20 right-0 mx-x my-2 min-w-[180px] z-10 rounded-xl`}
            >
              <ul className="list-none flex flex-col justify-end items-start  gap-4">
                {navLinks?.map((link) => {
                  return (
                    <li
                      key={link?.id}
                      className={`${
                        active === link?.title ? 'text-white' : 'text-secondary'
                      } text-medium text-[16px] font-poppins cursor-pointer`}
                      onClick={() => {
                        setActive(link?.title);
                        setToggle(!toggle);
                      }}
                    >
                      <a href={`#${link?.id}`}>{link?.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
