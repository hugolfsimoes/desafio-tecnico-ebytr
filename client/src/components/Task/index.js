import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import redFlag from '../../images/redFlag.png';
import greenFlag from '../../images/greenFlag.png';
import yellowFlag from '../../images/yellowFlag.png';
import moment from 'moment';

export default function Task({ task }) {
  const { title, message, creator, priority, status, createdAt } = task;
  let statusColor = '';
  if (status === 'Open') {
    statusColor = 'green';
  } else {
    statusColor = 'red';
  }
  return (
    <div className="card-body">
      <ion-icon style={ { color: statusColor } } name="radio-button-on"></ion-icon>
      <h5 className="card-title">Title: { title }</h5>
      <h6 className="card-subtitle mb-2 text-muted">Creator: { creator }</h6>
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
      <button type="button" className="btn btn-danger">Delete</button>
      <button type="button" className="btn btn-warning">Edit</button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.arrayOf(PropTypes.string)
};