import React , {useState , useEffect} from 'react'
import {Avatar ,  AppBar , Typography , Toolbar , Button} from "@material-ui/core"
import useStyles from "./styles"
import Logo from "../../images/logo.png"
import {Link, useHistory , useLocation } from "react-router-dom"
import {useDispatch} from "react-redux"
import decode from "jwt-decode"

function Navbar() {
    const classes = useStyles()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logout = () =>
    {
        dispatch({type:"LOGOUT"})
        setUser(null)
        history.push("/")
        window.location.reload(false);
    }
    useEffect(() =>
    {
        const token = user?.token
        if(token)
        {
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime())
            {
                logout()
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    return (
            <AppBar className={classes.appBar} position="static" color="inherit">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Barrio&display=swap');
            </style>
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">   <b>Alchemy</b> </Typography>                
                  <img className={classes.image} src={Logo} alt="logo" height="60"/>
                </div>
                <Toolbar className={classes.toolbar}>
                    {user ? 
                    (<div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography component={Link} to="/profile" className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>LogOut</Button>
                    </div>)
                    :
                    (<Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>)
                    }
                </Toolbar>
            </AppBar>
    )
}

export default Navbar
