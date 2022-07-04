import { makeStyles } from '@mui/styles';

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
