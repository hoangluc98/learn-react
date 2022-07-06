import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  template: {
    backgroundColor: 'var(--bg)'
  },

  scoreItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '52px',
    padding: '14px',
    backgroundColor: 'var(--white)',
    borderRadius: '8px',
    marginBottom: '14px'
  },
  scoreElement: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  },
  scoreText: {
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '18px',
    color: 'var(--second-color)'
  },
  scoreTextBold: {
    fontWeight: '400'
  },
  scoreNumber: {
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    color: 'var(--purple)'
  },

  cardContainer: {
    margin: '0px -16px',
    backgroundColor: 'var(--white)'
  },
  cardImage: {
    width: '100%',
    maxWidth: '500px'
  },
  cardInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    padding: '8px 16px 16px'
  },
  cardTitleGroup: {
    display: 'flex',
    gap: '16px'
  },
  cardTitle: {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '18px',
    color: 'var(--mine-shaft-radial)',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word'
  },
  cardSubTitle: {
    fontWeight: '300'
  },
  cardIcon: {
    height: '24px',
    width: '24px'
  },
  cardDate: {
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '16px',
    color: 'var(--mine-shaft-radial)'
  },
  cardPointGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardPointText: {
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '22px',
    color: 'var(--mine-shaft-radial)'
  },

  detailContainer: {
    marginTop: '16px'
  },
  detailHeader: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    color: 'var(--mine-shaft-radial)',
    marginBottom: '16px'
  },
  detailGroup: {
    padding: '24px 16px',
    backgroundColor: 'var(--white)',
    boxShadow: '0px 7px 8px rgba(179, 179, 179, 0.2)',
    borderRadius: '8px'
  },
  detailTitle: {
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '26px',
    color: 'var(--mine-shaft-radial)',
    marginBottom: '10px'
  },
  detailItem: {
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '18px',
    color: 'var(--mine-shaft-radial)'
  },
  termContainer: {
    paddingLeft: '26px'
  }
});
