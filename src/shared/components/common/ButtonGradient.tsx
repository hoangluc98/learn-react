import React from 'react';
import { Button } from '@mui/material';
import { styled, makeStyles } from '@mui/styles';
import TextGradient from './TextGradient';

export const StyledButton = styled(Button)({
  border: 'solid 1px transparent !important',
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, var(--gradient-start), var(--gradient-end))`,
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
  textTransform: 'capitalize !important' as any
});

export const useStyles = makeStyles({
  text: {
    color: 'var(--white)'
  }
});

export const useFooterStyles = makeStyles({
  button: {
    height: '46px',
    width: '100%',
    borderRadius: '32px !important'
  }
});

const Text = (props: any) => {
  const classes = useStyles();

  if (props.variant === 'outlined') return <TextGradient>{props.children}</TextGradient>;
  return <span className={classes.text}>{props.children}</span>;
};

const ButtonGradient = (props: any) => {
  const styledButton: any = {};
  if (props?.variant === 'outlined') {
    styledButton['boxShadow'] = '2px 1000px 1px #fff inset';
  }

  if (props?.disabled) {
    styledButton['background'] = 'none';
    styledButton['backgroundColor'] = 'var(--grey2)';
  }

  return (
    <StyledButton {...props} style={styledButton}>
      <Text variant={props.variant}>{props.children}</Text>
    </StyledButton>
  );
};

export default ButtonGradient;
