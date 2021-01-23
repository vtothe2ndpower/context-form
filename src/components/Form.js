import React, { useContext } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input, 
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select 
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/FormStyles';
import { LanguageContext } from '../contexts/LanguageContext';

const words = {
  english: {
    signIn: 'Sign In',
    email: 'Email Adress',
    password: 'Password',
    remember: 'Remember Me'
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electronico',
    password: 'Contrasena',
    remember: 'Recuerdame'
  },
  japanese: {
    signIn: 'サインイン',  
    email: 'Eメール',
    password: 'パスワード',
    remember: '私を覚えてますか'
  }
};

function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { classes } = props;
  const { signIn, email, password, remember } = words[language];
  return (
  <main className={classes.main}>
  <Paper className={classes.paper}>
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography variant='h5'>
      {signIn}
    </Typography>
    <Select value={language} onChange={changeLanguage}>
      <MenuItem value='english'>English</MenuItem>
      <MenuItem value='spanish'>Spanish</MenuItem>
      <MenuItem value='japanese'>Japanese</MenuItem>
    </Select>
    <form className={classes.form}>
      <FormControl margin='normal' required fullWidth>
        <InputLabel htmlFor='email'>{email}</InputLabel>
        <Input id='email' name='email' autoFocus></Input>
      </FormControl>
      <FormControl margin='normal' required fullWidth>
        <InputLabel htmlFor='password'>{password}</InputLabel>
        <Input id='password' name='password' autoFocus></Input>
      </FormControl>
      <FormControlLabel control={<Checkbox color='primary' />} label={remember} />
      <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>{signIn}</Button>
    </form>
  </Paper>
  </main>
  );
}

export default withStyles(styles)(Form);