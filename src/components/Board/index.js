import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import dataContext from '../../context/DataContext';
import * as api from '../../api';
import Task from '../Task';

export default function Board() {

  const { setState, change } = useContext(dataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState(true);

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const { data } = await api.fetchTasks();
        setState(data);
        setTasks(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllTasks();
  }, [change]);


  if (isLoading) return (<h1>Loading</h1>);
  return (
    <div id="board">
      { tasks.map((task) => {
        return (
          <div key={ task._id } className="card">
            <Task task={ task } />
          </div>);
      }) }
    </div>
  );
}
