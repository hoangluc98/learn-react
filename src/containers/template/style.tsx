import { styled, makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  headerFooter: {
    display: 'grid',
    placeItems: 'center'
  },

  header: {
    padding: '8px'
  },

  main: {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: '24px 16px',

    '::-webkit-scrollbar': {
      width: '10px'
    },

    /* Track */
    '::-webkit-scrollbar-track': {
      background: '#f1f1f1'
    },

    /* Handle */
    '::-webkit-scrollbar-thumb': {
      background: '#888'
    },

    /* Handle on hover */
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555'
    }
  },

  footer: {
    padding: '16px',
    boxShadow: '0px 0px 8px rgb(0 0 0 / 20%)'
  },

  boxShowNone: {
    boxShadow: 'none !important'
  }
});

export const StyledHeader = styled('div')({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '29px 1fr 29px',
  alignItems: 'center'
});

export const useHeaderStyles = makeStyles({
  title: {
    justifySelf: 'center',
    gridColumnStart: '2',
    color: 'var(--second-color)',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '22px'
  },

  left: {
    justifySelf: 'left'
  },

  right: {
    justifySelf: 'right'
  }
});
