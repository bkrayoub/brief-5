import React, { useState } from 'react'
import {HiMenuAlt3, HiUserGroup, HiClipboardList} from 'react-icons/hi';
import {AiFillHome} from 'react-icons/ai';
import {FaSchool} from 'react-icons/fa';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
const SideBare = () => {

  const menus = [
    {name : "Home", Link: "/Home", icon: AiFillHome},
    {name : "Promotion", Link: "/Promotion",  icon: FaSchool},
    {name : "Aprrenants", Link: "/Aprrenants",  icon: HiUserGroup},
    {name : "Brief", Link: "/Brief",  icon: HiClipboardList},
  ]
  const [open, setOpen] = useState(true);

  return (
      <div>
          <section className='flex gap-2'>
              <div className={`bg-[#FFFFFF] min-h-screen ${open ? 'w-60': 'w-16'} duration-500 px-3`}>
                  <div className='py-3 flex justify-end'>  
                      <HiMenuAlt3 size={26} className="cursor-pointer hover:text-[#FF7A00] duration-500" onClick={() => setOpen(!open)}/>
                  </div>
                  <div>
                    
                  </div>
                  <div className='mt-4 flex flex-col gap-4 relative '>
                    {menus.map((menu,i)=>(

                      <Link to={menu.Link} key={i} className='flex items-center text-sm gap-3.5 font-medium p-5 hover:text-[#FF7A00] cursor-pointer'>
                        <div>{React.createElement(menu.icon, {size: "20"})}</div> 
                        <h2 
                          style={{ transitionDelay: `400ms` }}
                          className={` duration-500 ${!open && 'opacity-0 overflow-hidden'}`}>
                          {menu.name}
                        </h2>
                      </Link>

                    ))}

                  </div>
              </div>

          </section> 
      </div>
  )
  
}

export default SideBare