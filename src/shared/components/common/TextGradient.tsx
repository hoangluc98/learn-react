import React from 'react';
import { styled } from '@mui/styles';

export const StyleSpan = styled('span')({
  background: 'linear-gradient(to right, var(--gradient-start) 0%, var(--gradient-end) 100%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent'
});

const SpanGradient = (props: any) => {
  return <StyleSpan {...props} />;
};

export default SpanGradient;
