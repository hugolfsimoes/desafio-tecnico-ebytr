import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import * as api from '../../api';
import dataContext from '../../context/DataContext';


export default function Form() {

  const { change, setChange, taskEdit, setTaskEdit, isEditing, setIsEditing } = useContext(dataContext);
  const [taskData, setTaskData] = useState({
    title: '', message: '', author: '', priority: 'High', status: 'Open'
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskEdit) {
      await api.updateTask(taskEdit._id, taskData);
    } else {
      await api.createTask(taskData);
    }
    handleClickClear();
  };

  const handleClickClear = () => {
    setTaskData({ title: '', message: '', author: '', priority: 'High', status: 'Open' });
    setChange(!change);
    setIsEditing(false);
    setTaskEdit(null);
  };

  useEffect(() => {
    if (isEditing) {
      setTaskData({ title: taskEdit.title, message: taskEdit.message, author: taskEdit.author, priority: taskEdit.priority, status: taskEdit.status });
    }
  }, [taskEdit]);

  return (
    <form className="row g-3"
      action=""
      onSubmit={ handleSubmit }
      autoComplete="off"
      style={ {
        display: 'flex',
        flexDirection: 'column'
      } }>
      <h5>{ isEditing ? 'Edit Task' : 'Create Task' }</h5>

      <input className="form-control form-control-sm"
        type="text" placeholder="Title"
        aria-label=".form-control-sm example"
        required
        value={ taskData.title }
        onChange={ (e) => setTaskData({ ...taskData, title: e.target.value }) } />

      <textarea
        className="form-control"
        placeholder="Message"
        id="floatingTextarea"
        required
        value={ taskData.message }
        onChange={ (e) => setTaskData({ ...taskData, message: e.target.value }) }></textarea>

      <input className="form-control form-control-sm"
        type="text" placeholder="Author"
        aria-label=".form-control-sm example"
        required
        value={ taskData.author }
        onChange={ (e) => setTaskData({ ...taskData, author: e.target.value }) } />

      <label htmlFor="input-priority">Priority:
        <select
          className="form-select"
          aria-label="Default select example"
          value={ taskData.priority }
          onChange={ (e) => setTaskData({ ...taskData, priority: e.target.value }) } >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>

      <label htmlFor="input-status">Status:
        <select
          className="form-select"
          aria-label="Default select example"
          value={ taskData.status }
          onChange={ (e) => setTaskData({ ...taskData, status: e.target.value }) } >
          <option value="Open">Open</option>
          <option value="Pending">Pending</option>
          <option value="Closed">Closed</option>
        </select>
      </label>
      <button type="submit" className="btn btn-primary" >Submit</button>
      <button type="button" className="btn btn-danger" onClick={ handleClickClear }>Clear</button>
    </form>
  );
}
