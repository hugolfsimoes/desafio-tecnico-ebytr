import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Form from './components/Form';
import Tasks from './components/Tasks';
import logo from './images/logoEbytr.png';
import useStyles from './styles';



const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
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
    </Container>
  );
};
export default App;