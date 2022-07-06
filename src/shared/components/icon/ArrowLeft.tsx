import { IconButton } from '@mui/material';
import iconLeft from 'assets/imgs/common/left-arrow.svg';

const ArrowLeft = (props: any) => {
  return (
    <IconButton size="12" {...props}>
      <img src={iconLeft} alt="Back" loading="lazy" />
    </IconButton>
  );
};

export default ArrowLeft;
