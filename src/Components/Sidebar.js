import React from 'react';
import { MdOutlineDashboard } from "react-icons/md"
import { HiOutlineHome } from "react-icons/hi";
import { menuItems } from '../data/dummy';
import { Link } from "react-router-dom"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="container">
      <div className="logo">
        <MdOutlineDashboard className="logo-icon" />
        <span>AnalizioDash</span>
      </div>

      <div className="menu">
        {
          menuItems.map((item) => (

            <Link to={`/${item.name}`} key={item.id} style={{textDecoration: 'none'}}>
              <div className="item" >
                {item.icon}
                <h3>{item.title}</h3>
              </div>
            </Link>


          ))
        }
      </div>
    </div>
  )
}

export default Sidebar