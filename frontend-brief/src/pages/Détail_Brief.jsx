import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BsListCheck } from 'react-icons/bs';

const Detail_Brief = () => {
    const param = useParams();
    const [briefs, setBriefs] = useState({task:[]});
    const [progressBrief, setProgressBrief] = useState(0);

    useEffect(() => {
      const getBrief = async () => {
        const apiBrief = await axios.get('http://127.0.0.1:8000/api/Brief/'+ param.id);
        setBriefs((old)=>{return {...old, ...apiBrief.data}});
        let completedTask = 0;
        for (let i = 0; i < apiBrief.data.task.length; i++){
          if(apiBrief.data.task[i].état == 1){
            completedTask++;
          } 
          setProgressBrief((completedTask / apiBrief.data.task.length) * 100)
        }
      }
      getBrief();
    }, [])
  return (
    <>
      <div className='ml-80 mt-20'>
                  <div className='bg-white w-780 p-7 rounded-3xl border-2'>
                    <div className='flex'>
                      <h1 className='text-lg font-bold'> {briefs.name_brief} </h1>
                      <div className='flex ml-10 mt-1.5'>
                          <span className='text-[#FF7A00]'><BsListCheck /></span>
                          <span className='text-xs ml-2 font-semibold'>{briefs.task.length} Taches</span>
                      </div>
                    </div>

                      <p className='text-justify'>
                          {briefs.descrip}
                      </p>
                      <div className='flex justify-around'>
                          <h3>
                            <span className='font-bold'> Date de livraison : </span>{briefs.start_brief}
                          </h3>
                          <h3>
                            <span className='font-bold'> Date de récupération : </span>{briefs.end_brief}
                          </h3>
                      </div>
                      
                  </div>
      </div>
      <div className='ml-80 mt-8'>
          <div className='flex justify-between bg-white p-7 rounded-3xl border-2'>
              <h1  className='font-bold'>Etat d'avancement de la brief :</h1>
              <div style={{
                width:'200px',
                height:'30px',
                backgroundColor:'gray'                
              }}>
                <div style={{width:progressBrief + '%', height:"30px",backgroundColor:'#FF7A00'}}>
                      <span className='text-white'> {progressBrief}% </span>
                  </div>
              </div>
               
          </div>
      </div>


    </>
    
  )
}

export default Detail_Brief