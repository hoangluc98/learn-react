import React from 'react';
import { makeStyles } from '@mui/styles';
import ButtonGradient from './ButtonGradient';
import iconMinus from 'assets/imgs/common/minus-gradient.svg';
import iconPlus from 'assets/imgs/common/plus-gradient.svg';

export const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    gap: '6px',
    alignItems: 'center'
  },
  buttonNumber: {
    display: 'grid',
    placeItems: 'center',
    height: '34px',
    width: '58px',
    backgroundColor: 'var(--grey1)',
    borderRadius: '4px'
  },
  buttonOperation: {
    height: '34px',
    width: '34px',
    minWidth: '34px !important'
  },
  buttonIcon: {
    display: 'grid',
    placeItems: 'center'
  },
  buttonIconDisabled: {
    opacity: '0.3',
    filter: 'invert(0.5)'
  }
});

const ButtonNumber = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <ButtonGradient
        {...props}
        variant="outlined"
        color="secondary"
        className={classes.buttonOperation}>
        <img
          src={iconMinus}
          alt="Minus"
          loading="lazy"
          className={`${classes.buttonIcon} ${props?.disabled && classes.buttonIconDisabled}`}
        />
      </ButtonGradient>
      <span className={classes.buttonNumber}>1</span>
      <ButtonGradient
        {...props}
        variant="outlined"
        color="secondary"
        className={classes.buttonOperation}>
        <img
          src={iconPlus}
          alt="Plus"
          loading="lazy"
          className={`${classes.buttonIcon} ${props?.disabled && classes.buttonIconDisabled}`}
        />
      </ButtonGradient>
    </div>
  );
};

export default ButtonNumber;
