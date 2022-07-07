import React from 'react';
import { CircularProgress } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  circleContainer: {
    position: 'relative'
  },
  circle: {
    stroke: 'url(#linearColors) !important'
  }
}));

const StyledCircularProgress = withStyles({
  root: {
    position: 'absolute',
    top: '9px',
    left: '6px',

    '& .MuiCircularProgress-circle': {
      stroke: 'url(#linearColors) !important'
    }
  }
})(CircularProgress);

const GradientCircularProgress = () => {
  const classes = useStyles({});

  return (
    <div className={classes.circleContainer}>
      <svg width="52" height="52">
        <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
          <stop offset="20%" stopColor="var(--gradient-start)" />
          <stop offset="90%" stopColor="var(--gradient-end)" />
        </linearGradient>
      </svg>
      <StyledCircularProgress thickness={4} />
    </div>
  );
};

export default GradientCircularProgress;
