import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 200,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border:"1px solid black",
    backgroundColor:"white", 
    opacity:"40"
  },
  heading: {
    color: "#FF9D00",
    fontFamily:'Barrio'
  },
  image: {
    marginLeft: '15px',
  },
}));