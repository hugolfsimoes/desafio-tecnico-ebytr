import React, { useState } from 'react';


export default function Form() {

  const [taskData, setTaskData] = useState({
    title: '', message: '', creator: '', priority: '', status: ''
  });

  const handleSubmit = () => {

  };
  return (
    <form action="" onSubmit={ handleSubmit } autoComplete="off">
      <h5>Create a Task</h5>

      <label htmlFor="input-title">Title:
        <input type="text"
          name="title"
          id="input-title"
          value={ taskData.title }
          onChange={ (e) => setTaskData({ ...taskData, title: e.target.value }) } />
      </label>

      <label htmlFor="input-message">Message:
        <input type="text"
          name="message"
          id="input-message"
          value={ taskData.message }
          onChange={ (e) => setTaskData({ ...taskData, message: e.target.value }) } />
      </label>

      <label htmlFor="input-creator">Creator:
        <input type="text"
          name="creator"
          id="input-creator"
          value={ taskData.creator }
          onChange={ (e) => setTaskData({ ...taskData, creator: e.target.value }) } />
      </label>

      <label htmlFor="input-priority">Priority:
        <input type="text"
          name="priority"
          id="input-priority"
          value={ taskData.priority }
          onChange={ (e) => setTaskData({ ...taskData, priority: e.target.value }) } />
      </label>

      <label htmlFor="input-status">Status:
        <input type="text"
          name="status"
          id="input-status"
          value={ taskData.status }
          onChange={ (e) => setTaskData({ ...taskData, status: e.target.value }) } />
      </label>
    </form>
  );
}
