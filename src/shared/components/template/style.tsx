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
    padding: '16px'
  },

  main: {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: '0 24px',
    margin: '24px 0',

    /* Hide scrollbar for Chrome, Safari and Opera */
    '&::-webkit-scrollbar': {
      display: 'none'
    },

    /* Hide scrollbar for IE, Edge and Firefox */
    '-ms-overflow-style': 'none' /* IE and Edge */,
    'scrollbar-width': 'none' /* Firefox */
  },

  footer: {
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

  right: {
    justifySelf: 'right'
  }
});
