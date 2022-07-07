import React, { useState, useEffect } from 'react';
import { Backdrop, Button } from '@mui/material';
import iconClose from 'assets/imgs/common/close-white.svg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  close: {
    position: 'absolute',
    top: '16px',
    right: '16px'
  }
}));

interface IProps {
  closable?: boolean;
  isOpen: boolean;
  children: React.ReactNode;
}

const BackdropContainer = (props: IProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme: any) => theme.zIndex.drawer + 1,
          background: 'var(--black)',
          opacity: '0.85 !important'
        }}
        open={open}>
        {props.closable && (
          <img
            src={iconClose}
            alt="Close"
            loading="lazy"
            className={classes.close}
            onClick={handleClose}
          />
        )}
        {props.children}
      </Backdrop>
    </div>
  );
};

export default BackdropContainer;
