import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dataContext from './DataContext';


export default function DataProvider({ children }) {
  const [state, setState] = useState([]);


  return (
    <main>
      <dataContext.Provider value={ { state, setState } }>
        { children }
      </dataContext.Provider>
    </main>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};