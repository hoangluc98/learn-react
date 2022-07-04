import { IconButton } from '@mui/material';
import iconClose from 'assets/imgs/common/close.svg';

const Close = (props: any) => {
  return (
    <IconButton size="12" {...props}>
      <img src={iconClose} alt="Close" loading="lazy" />
    </IconButton>
  );
};

export default Close;
