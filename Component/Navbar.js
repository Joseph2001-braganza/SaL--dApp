import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {AiFillHome} from 'react-icons/ai'
import {FaDatabase} from 'react-icons/fa';
import {FcAbout} from 'react-icons/fc'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {Web3Button} from '@web3modal/react';
import LogoutButton from "../Component/LogoutButton"
import SalDappLogo from "../public/images/sal-Dapp.png"
import Image from "next/image"

const Navbar = ({ handleLogout }) => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
      child: (
        <>
          <AiFillHome size = {25} />
        </>
      ),
      name: "Home",
    },
    {
      id: 2,
      link: "cards",
      child: (
        <>
          <FaDatabase size = {25} />
        </>
      ),
      name: "Data",
    },
    {
      id: 3,
      link: "About",
      child: (
        <>
          <FcAbout size = {25} />
        </>
      ),
      name: "About",
    },
    {
      id: 4,
      link: "contact",
      child: (
        <>
          <BsFillTelephoneFill size = {25} />
        </>
      ),
      name: "Support Me"
    },
  ]

  return (
    <>
      <div className = 'navbar bg-white m-0 flex justify-between items-center min-w-full overflow-hidden h-12 py-0 px-4 text-blue-500 fixed z-50'>
        <div className = "flex">
          <div className = "w-10 h-10 pt-1">
            <Image className = "rounded-full" src = {SalDappLogo} height = "30" width = "30" alt = ""/>
          </div>
          <h1 className = "text-2xl font-extrabold text-blue-500 ml-2 max-md:text-base max-sm:ml-1 max-md:mr-3 font-title max-md:pt-2 pt-1">DAPP.eth</h1>
        </div>

        <ul className = "hidden md:flex text-blue-500">
          {links.map(({id, link, name}) => (
            <li key = {id} className = "px-4 cursor-pointer md:hover:scale-125 duration-300 capitalize text-xl font-bold">
              {link === 'Logout' ? 
                <a className = "hidden" onClick={handleLogout}>{link}</a> : 
                <Link to={link} smooth duration={50}>{name}</Link>
              }        
            </li>
          ))}
        </ul>

        <ul className = "md:hidden flex font-extrabold text-xl text-blue-500">
          {
            links.map(({id, link, child}) => (
              <li key = {id} className = "px-4 cursor-pointer py-6 text-2xl capitalize max-sm:px-1">
                <Link onClick = {() => setNav(!nav)} to={link} smooth duration={5000}>{child}</Link>
              </li>
            ))
          }
        </ul>

        <div className="flex ">    
          <button className = "pl-8 py-4 text-xl font-bold">  
            <Web3Button balance="show" icon="hide" label="Connect Wallet" />
          </button>
          <button className = "pl-4 py-4 text-xl font-bold">  
          <LogoutButton handleLogout={handleLogout}/>
          </button>
          
        </div>
      </div>
    </>
  );
};

export default Navbar

