import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Form from './components/Form';
import dataContext from './context/DataContext';
import * as api from './api';
import logo from './images/logoEbytr.png';

const App = () => {
  const { state, setState } = useContext(dataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const { data } = await api.fetchTasks();
        setState(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllTasks();
  }, []);


  if (isLoading) return (<h1>Loading</h1>);
  return (
    <div id="container">
      <header id="header-tag">
        <img id="logo-image" src={ logo } alt="Logo da empresa Ebytr" />
        <h2 id="title-h2">Task Manager</h2>
      </header>
      <div id="content-container">
        <aside id="form-field">
          <Form />
        </aside>
        <main id="main-content">
          <Board />
        </main>
      </div>
    </div>
    /* <Container maxWidth="lg">
        <AppBar className={ classes.appBar } position="static" color="inherit">
          <Typography className={ classes.heading } variant="h2" align="center">Tasks</Typography>
          <img className={ classes.image } src={ logo } alt="Logo da empresa Ebytr" height="100" />
        </AppBar>
        <Grow in >
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={ 3 }>
              <Grid item xs={ 12 } sm={ 7 }>
                <Tasks />
              </Grid>
              <Grid item xs={ 12 } sm={ 4 }>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container> */
  );
};
export default App;