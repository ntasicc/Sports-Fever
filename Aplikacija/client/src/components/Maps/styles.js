import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  map: {
    marginTop: '30px',
    marginRight: '10px',
    marginLeft:'10px',
    marginBottom: '15px',
    boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  buttons: {
    backgroundColor: '#04ECF0',
    marginTop: '10px',
    marginBottom: '5px',
    alignSelf: 'center',
    width: '100%',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#04ECF0',
      boxShadow:
        '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
    },
  },

  paper: {
    padding: theme.spacing(3),
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  typography: {
    fontSize: '16px',
    //padding: theme.spacing(1),
  },
  geolocation: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    zIndex: '10',
    right: '70px',
    top: '107px',
    width: '35px',
    height: '35px',
    boxShadow: '0 0 0 3px #a1a19f',
    '@media (max-width: 1000px)': {
      top: '590px',
      right: '30px',
    },
  },
  geolocation2: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    zIndex: '10',
    right: '70px',
    top: '107px',
    width: '35px',
    height: '35px',
    boxShadow: '0 0 0 3px #a1a19f',
    '@media (max-width: 1000px)': {
      top: '790px',
      right: '30px',
    },
  },
  searchLocation: {
    position: 'absolute',
    zIndex: '10',
    left: '57%',
    marginTop: '5px',
    '@media (max-width: 1000px)': {
      top: '585px',
      left: '70px',
    },
  },
  searchLocation2: {
    position: 'absolute',
    zIndex: '10',
    left: '57%',
    marginTop: '5px',
    '@media (max-width: 1000px)': {
      top: '785px',
      left: '70px',
    },
  },
  searchLocationInput: {
    border: '4px solid #04ECF0',
    width: '200px',
    height: '25px',
    boxShadow: '0 8px 12px 0 rgba(0,0,0,0.24)',
    fontSize: '16px',
    padding: '2px',
  },
}))
