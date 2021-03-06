import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {ACCESS_TYPE_DEFAULT, ACCESS_TYPE_SPECIAL, ACCESS_TYPE_STUDENT} from './AccessTypes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setAccessType, setModalLoginFormStatus, setModalRegisterFormStatus} from 'redux/actions';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.searchbar.backgroundColor,
    color: theme.palette.text.main,
  },
  link: {
    color: theme.palette.text.main,
    textDecoration: 'none',
  },
  header: {
    textAlign: 'center',
  },
  subheader: {
    paddingTop: theme.spacing(3),
    textAlign: 'center',
  },
  label: {
    textAlign: 'right',
    verticalAlign: 'middle',
    padding: `0 ${theme.spacing(1)}`,
  },
  inputWrap: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  caption: {
    fontSize: '14px',
    color: theme.palette.caption.main,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0px',
    "&.MuiButtonBase-root": {
      textTransform: 'none',
    },
  },
  logButtonStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0px',
    "&.MuiButtonBase-root": {
      textTransform: 'none',
      paddingLeft: '24px',
      paddingRight: '24px',
    },
  },
  textfield: {
    backgroundColor: theme.palette.searchbar.inputbackgroundColor,
    color: theme.palette.caption.main,
  },
  togglebutton: {
    "&.MuiButtonBase-root": {
      backgroundColor: theme.palette.loginform.buttonbackgroundColor,
      borderRadius: '7px',
      marginLeft: '8px',
    },
    "&.MuiToggleButton-root": {
      padding: '4px',

      "&:hover": {
        backgroundColor: 'rgb(52,77,158)',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
      },
    },
    '&$selected': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  buttonCancel: {
    margin: `0 ${theme.spacing(1)}`,

    "&.MuiButtonBase-root": {
      color: '#8e8e8e',
      borderColor: '#8e8e8e',
      textTransform: 'none'
    },
  },
  regButtonWrap: {
    textAlign: 'center',
  },
  regButtonStyle: {
    "&.MuiButtonBase-root": {
      color: '#8e8e8e',
      borderColor: '#8e8e8e',
      textTransform: 'none',
      fontSize: '10px',
    },
  },
  selected: {},
}));

function LoginForm({handleAccessType, handleLoginFormStatus, handleModalRegisterFormStatus}) {
  const classes = useStyles();

  let accessType = localStorage.getItem('accessType');

  if (accessType === undefined || accessType === null) {
    localStorage.setItem('accessType', ACCESS_TYPE_DEFAULT);
    accessType = localStorage.getItem('accessType');
  }

  const [alignment, setAlignment] = useState(Number(accessType));

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment === null || newAlignment === undefined) {
      return;
    }

    localStorage.setItem('accessType', newAlignment);
    handleAccessType(newAlignment);
    setAlignment(newAlignment);
  };

  const handleOnClickRegisterButton = () => {
    handleLoginFormStatus(false);
    handleModalRegisterFormStatus(true);
  };

  return (
    <Grid className={classes.root}>
      <h2 className={classes.header}>Вход</h2>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField fullWidth label="E-mail" variant="filled" InputProps={{className: classes.textfield}} InputLabelProps={{className: classes.caption}}/>
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <Grid item xs={12} className={classes.input}>
          <TextField
            fullWidth
            label="Пароль"
            variant="filled"
            type="password"
            InputProps={{className: classes.textfield}}
            InputLabelProps={{className: classes.caption}}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <a href="/" className={classes.link}>Забыли пароль?</a>
      </Grid>
      <h3 className={classes.subheader}>Тип пользователя*</h3>
      <Grid container className={classes.inputWrap} spacing={1} justifyContent="center">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
        >
          <ToggleButton value={ACCESS_TYPE_SPECIAL} style={{color: 'white', textTransform: 'none'}} classes={{root: classes.togglebutton, selected: classes.selected}}>
            Специалист
          </ToggleButton>
          <ToggleButton value={ACCESS_TYPE_STUDENT} style={{color: 'white', textTransform: 'none'}} classes={{root: classes.togglebutton, selected: classes.selected}}>
            Студент
          </ToggleButton>
          <ToggleButton value={ACCESS_TYPE_DEFAULT} style={{color: 'white', textTransform: 'none'}} classes={{root: classes.togglebutton, selected: classes.selected}}>
            Обычный
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid container className={classes.inputWrap}>
        <p className={classes.caption}>
          * Данная функция является демонстрационной,
          в финальной версии сайта тип пользователя
          будет устанавливаться при подтверждении
          уровня специализации
        </p>
      </Grid>
      <Grid container className={classes.button} spacing={1}>
        <Grid item>
          <Button variant="outlined" className={classes.buttonCancel} onClick={() => handleLoginFormStatus(false)}>
            Отмена
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.logButtonStyle} variant="contained" color="primary">
            Вход
          </Button>
        </Grid>
      </Grid>
      <Grid item className={classes.regButtonWrap}>
        <Button
          className={classes.regButtonStyle}
          variant="outlined"
          color="primary"
          onClick={handleOnClickRegisterButton}
        >
          Регистрация
        </Button>
      </Grid>
    </Grid>
  );
}

LoginForm.propTypes = {
  handleAccessType: PropTypes.func,
  handleLoginFormStatus: PropTypes.func,
  handleModalRegisterFormStatus: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    videocontent: state.gridvideo,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleAccessType: setAccessType,
    handleLoginFormStatus: setModalLoginFormStatus,
    handleModalRegisterFormStatus: setModalRegisterFormStatus,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
