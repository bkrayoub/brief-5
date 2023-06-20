import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Consulter = () => {
    let parame = useParams();
    const [consulter, setConsulter] = useState({ apprenant: [] });

    useEffect(() => {
        const getApprenantBrief = async () => {
            const apiConsulter = await axios.get("http://127.0.0.1:8000/api/Brief/" +  parame.id);
            console.log(apiConsulter.data);
            setConsulter(apiConsulter.data);
        }
        getApprenantBrief();
    }, [])

  return (
    <div className='flex py-7 px-14 sm:flex-row sm:space-x-6 sm:space-y-0'>
        {consulter.apprenant.map((item) => 
            <div key={item.id} className='bg-white p-7 rounded-3xl border-2 duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
                <div className='flex'>
                    <span>Nom Apprenants : </span><h1 className='font-semibold'>{item.prenom} {item.nom}</h1>
                </div>
                <span className=''>Etat d'avancement : { (item.tasks.filter((task) => task.pivot.etat_Task == 1).length / item.tasks.length) * 100 }%</span>
            </div>
        )}
    </div>
  )
}

export default Consulter;