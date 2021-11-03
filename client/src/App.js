import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import logo from './images/logoEbytr.png';

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Tasks</Typography>
        <img src={ logo } alt="Logo da empresa Ebytr" height="60" />
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
    </Container>
  );
};
export default App;