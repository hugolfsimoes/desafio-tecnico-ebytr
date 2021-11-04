import React, { useContext, useState } from 'react';
import * as api from '../../api';
import dataContext from '../../context/DataContext';


export default function Form() {

  const { change, setChange } = useContext(dataContext);
  const [taskData, setTaskData] = useState({
    title: '', message: '', creator: '', priority: 'high', status: 'open'
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.createTask(taskData);
    setChange(!change);
  };

  return (
    <form action="" onSubmit={ handleSubmit } autoComplete="off" style={ { display: 'flex', flexDirection: 'column' } }>
      <h5>Create Task</h5>

      <label htmlFor="input-title">Title:
        <input type="text"
          name="title"
          id="input-title"
          required
          value={ taskData.title }
          onChange={ (e) => setTaskData({ ...taskData, title: e.target.value }) } />
      </label>

      <label htmlFor="input-message">Message:
        <textarea type="text"
          name="message"
          id="input-message"
          required
          value={ taskData.message }
          onChange={ (e) => setTaskData({ ...taskData, message: e.target.value }) } />
      </label>

      <label htmlFor="input-creator">Creator:
        <input type="text"
          name="creator"
          id="input-creator"
          required
          value={ taskData.creator }
          onChange={ (e) => setTaskData({ ...taskData, creator: e.target.value }) } />
      </label>

      <label htmlFor="input-priority">Priority:
        <select type="text"
          name="priority"
          id="input-priority"
          value={ taskData.priority }
          onChange={ (e) => setTaskData({ ...taskData, priority: e.target.value }) } >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>

      <label htmlFor="input-status">Status:
        <select type="text"
          name="status"
          id="input-status"
          value={ taskData.status }
          onChange={ (e) => setTaskData({ ...taskData, status: e.target.value }) } >
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
