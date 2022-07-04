import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  template: {
    backgroundColor: 'var(--bg)'
  },

  cardContainer: {
    position: 'relative',
    textAlign: 'center',
    width: 'fit-content',
    margin: '0 auto'
  },

  cardImage: {
    width: '100%',
    maxWidth: '400px'
  },

  cardMaai: {
    position: 'absolute',
    top: '32px',
    right: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  maaiText: {
    fontWeight: '300',
    fontSize: '11px',
    lineHeight: '22px',
    color: 'var(--second-color90)'
  },
  maaiNum: {
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '22px',
    color: 'var(--second-color90)'
  },

  cardInfo: {
    position: 'absolute',
    left: '32px',
    bottom: '36px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  infoNum: {
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '22px',
    color: 'var(--second-color90)'
  },
  infoText: {
    opacity: '0.6'
  },

  expireContainer: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '6px',
    gap: '6px'
  },
  expire: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px 16px'
  },
  expireText: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px'
  },

  expireItem: {
    backgroundColor: 'var(--white)',
    borderRadius: '8px',
    padding: '16px'
  },
  expireItemText: {
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '22px',
    color: 'var(--mine-shaft-radial)'
  },
  expireItemNum: {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '22px',
    color: 'var(--mine-shaft-radial)'
  },

  noPointsContainer: {
    height: '240px',
    display: 'grid',
    placeItems: 'center'
  },
  noPoints: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gridGap: '12px',
    gap: '12px'
  },
  noPointsText: {
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '20px',
    color: 'var(--mine-shaft-radial)',
    opacity: '0.5'
  }
});
