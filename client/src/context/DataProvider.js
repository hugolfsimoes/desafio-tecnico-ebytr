import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dataContext from './DataContext';

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);
  return (
    <main>
      <dataContext.Provider value={ { data, setData } }>
        { children }
      </dataContext.Provider>
    </main>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};