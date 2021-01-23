import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/NavbarStyles';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const content = {
  english: {
    search: 'Search',
    flag: 'USA'
  },
  spanish: {
    search: 'Buscar',
    flag: 'SPAIN'
  },
  japanese: {
    search: '探す',
    flag: 'JAPAN'
  }
};

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { classes } = props;
  const { search, flag } = content[language];
  return (
    <div className={classes.root}>
      <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <span>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant='h6' color='inherit'>
            Language Form App
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder={`${search}...`} classes={{ 
              root: classes.inputRoot, 
              input: classes.inputInput 
            }}/>
          </div> 
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

export default withStyles(styles)(Navbar);