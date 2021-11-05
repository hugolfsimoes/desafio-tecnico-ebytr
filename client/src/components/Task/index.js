import React, { useContext } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import * as api from '../../api';
import redFlag from '../../images/redFlag.png';
import greenFlag from '../../images/greenFlag.png';
import yellowFlag from '../../images/yellowFlag.png';
import moment from 'moment';
import dataContext from '../../context/DataContext';

export default function Task({ task }) {
  const { change, setChange, setTaskEdit, setIsEditing } = useContext(dataContext);
  const { title, message, author, priority, status, createdAt } = task;


  let statusColor = '';
  if (status === 'Open') {
    statusColor = 'green';
  } else {
    statusColor = 'red';
  }

  const handleEditTask = (task) => {
    setTaskEdit(task);
    setIsEditing(true);
  };

  const handleDeleteTask = async (id) => {
    if (confirm('Do you really want to delete the task?')) {
      await api.deleteTask(id);
      setChange(!change);
    }
  };
  return (
    <div className="card-body">
      <ion-icon style={ { color: statusColor } } name="radio-button-on"></ion-icon>
      <h5 className="card-title">Title: { title }</h5>
      <h6 className="card-subtitle mb-2 text-muted">Author: { author }</h6>
      <p className="card-text">Message: { message }</p>
      {
        priority === 'High' && <p className="card-text">Priority:<img src={ redFlag } className="flag-icon" /></p>
      }
      {
        priority === 'Medium' && <p className="card-text">Priority:<img src={ yellowFlag } className="flag-icon" /></p>
      }
      {
        priority === 'Low' && <p className="card-text">Priority:<img src={ greenFlag } className="flag-icon" /></p>
      }
      <p id="created-tag" className="card-text">Created At: { moment(createdAt).fromNow() }</p>
      <button type="submit" className="btn btn-danger" onClick={ () => handleDeleteTask(task._id) }>Delete</button>
      <button type="submit" className="btn btn-warning" onClick={ () => handleEditTask(task) }>Edit</button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.arrayOf(PropTypes.string)
};