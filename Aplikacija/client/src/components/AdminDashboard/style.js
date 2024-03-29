import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    alignSelf: 'center',
  },
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
    margin: '20px 20px',
    backgroundColor: '#6af2f0',
    height: '100%',
    height: '100%',
  },
  content: {
    margin: '20px 20px',
    height: '100%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
    backgroundColor: '#BEBEBE',
    height: '100%',
  },
  sideBarButtons: {
    marginTop: '10px',
    alignSelf: 'center',
    padding: '5px',
    backgroundColor: '#6af2f0',
  },

  sideBarAvatar: {
    alignSelf: 'center',
    padding: '5px',
    backgroundColor: '#6af2f0',
    borderBottom: '1px solid grey',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  button: {
    width: '250px',
    alignSelf: 'center',
    margin: '10px 10px',
  },
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  reportContainer: {
    display: 'flex',
    flexDirection: 'row',
    widht: '100%',
    marginBottom: '10px',
    marginTop: '10px',
    borderBottom: '1px solid black',
    padding: '10px 10px',
  },
  buttonGroup: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  infoGroup: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    widht: '70%',
  },
  typography: {
    marginLeft: '10px',
    fontWeight: 'bold',
  },
  img: {
    height: '200px',
    width: '200px',
  },
}))
