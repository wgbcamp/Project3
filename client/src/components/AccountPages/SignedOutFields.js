import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
      flexGrow: 1,
      textAlign: 'center'
    },
  }));

  export default function TextFieldSizes(props) {
    const classes = useStyles();
  
    
    return (
      <div className={classes.root}>
          <br></br>
        <Grid container spacing={3}>
          <Grid item xs={12}>
              <h2>Sign up for an account</h2>
          <TextField label="Enter your username" id="standard-size-normal" onChange={props.handleInputChange}   name="username" />
          </Grid>
          <Grid item xs={12}>
          <TextField label="Enter your password" type="password" id="standard-size-normal" onChange={props.handleInputChange}  name="password" />
          </Grid>
          <Grid item xs={12}>
            <Link to="/">
          <Button onClick={props.signUp} variant="contained" color="primary">Submit</Button>
          </Link>
          </Grid>
          <Grid item xs={12}>
          <h4>Log in, if you have already created an account</h4>
          <TextField label="Enter your username" id="standard-size-normal" onChange={props.handleInputChange}   name="username" />
          </Grid>
          <Grid item xs={12}>
          <TextField label="Enter your password" type="password" id="standard-size-normal" onChange={props.handleInputChange}  name="password" />
          </Grid>
          <Grid item xs={12}>
            <Link to="/">
          <Button onClick={props.signIn} variant="contained" color="primary">Submit</Button>
          </Link>

          </Grid>
        </Grid>
        <h2>{props.imageName}</h2>
      </div>
    );
  }