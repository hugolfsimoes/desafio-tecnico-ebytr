import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dataContext from './DataContext';


export default function DataProvider({ children }) {
  const [state, setState] = useState([]);
  const [change, setChange] = useState(true);
  const [taskEdit, setTaskEdit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);


  return (
    <main>
      <dataContext.Provider value={ { state, setState, change, setChange, taskEdit, setTaskEdit, isEditing, setIsEditing } }>
        { children }
      </dataContext.Provider>
    </main>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};