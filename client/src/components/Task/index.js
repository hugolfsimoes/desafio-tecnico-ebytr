import React from 'react';
import PropTypes from 'prop-types';

export default function Task(props) {
  const { title, message, creator, priority, status } = props.task;
  console.log(props);
  return (
    <div className="card-body">
      <h5 className="card-title">Title: { title }</h5>
      <h6 className="card-subtitle mb-2 text-muted">Creator: { creator }</h6>
      <p className="card-text">Message: { message }</p>
      <p className="card-text">Priority: { priority }</p>
      <p className="card-text">Status: { status }</p>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.arrayOf(PropTypes.string)
};