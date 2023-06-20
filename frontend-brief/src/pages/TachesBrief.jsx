import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const TachesBrief = () => {
    const param = useParams();
    const [tasks, setTasks] = useState({task:[]});

    useEffect(() => {
        const getTasks = async () => {
          const apiTasks = await axios.get('http://127.0.0.1:8000/api/Brief/' + param.id);
          console.log(apiTasks);
          setTasks(apiTasks.data);
        }
        getTasks();
      }, [])

  return (
      <div className='flex py-7 px-14 sm:flex-row sm:space-x-6 sm:space-y-0'>
        {tasks.task.map((task) => {
            return (
                <div key={task.id} className='bg-white w-full p-7 rounded-3xl border-2 duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
                    <h1 className='font-bold'>Name Task : {task.name_task}</h1>
                    <h3>Date Start : {task.start_task}</h3>
                    <h3>Date end : {task.end_task}</h3>
                </div>
            );
        })}
      </div>
  )
}

export default TachesBrief