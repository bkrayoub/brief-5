import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img_brief from '../data-images/images.svg';
import { Link, NavLink } from 'react-router-dom';

const  Brief = () => {
  const [briefs, setBriefs] = useState([]);

  useEffect(() => {
    const getBrief = async () => {
      const apiBrief = await axios.get('http://127.0.0.1:8000/api/Brief');
      setBriefs(apiBrief.data);
    }
    getBrief();
  }, [])
  return (
      <div className='flex justify-around flex-wrap cursor-pointer rounded-3xl  py-7 px-14 sm:flex-row sm:space-x-6 sm:space-y-0'> 
          {briefs.map((brief) => {
            return (

              
                <div key={brief.id}
                className='w-80 display max-w-sm overflow-hidden 
                rounded-3xl bg-white duration-300 hover:scale-105 hover:shadow-xl'>
                  <Link  to={'/Détail_Brief/' + brief.id}>
                    <img src={ img_brief } className='w-full'/>
                </Link>
                  <h1 className=' my-2 text-xl font-semibold mx-6'>{brief.name_brief}</h1>
                  <h3 className='text-justify text-gray-500 text-xs mx-6'> {brief.descrip} </h3>
                  <div className=' mx-8 px-4 py-4 text-center flex space-x-4'>
                    <Link to={"/Consulter/" + brief.id}>
                        <button className='inline-block border border-black text-white rounded-3xl bg-black px-5 h-9 duration-75 hover:bg-white hover:text-black'>plus detail </button>
                    </Link>
                    <Link to={'/Tasks/' + brief.id}>
                        <button className='inline-block border border-black text-white rounded-3xl bg-black px-5 h-9 shadow-md duration-75 hover:bg-white hover:text-black  '>TACHES</button>
                    </Link>
                    
                  </div>
                </div>
              

            ); 
          })}
      </div>
    
  )
}

export default  Brief