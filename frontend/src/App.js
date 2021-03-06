import React , {useEffect , useState} from 'react'
import {Container , Grow , Grid} from "@material-ui/core"
import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"
import { useDispatch } from "react-redux"
import {getPosts} from "./actions/posts"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter , Switch , Route} from "react-router-dom"
import Auth from "./components/Auth/Auth"
import Profile from "./components/Profile/Profile"
import Pusher from "pusher-js"

function App() 
{
    const dispatch = useDispatch()
    const [currentId , setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])


    return (
        <BrowserRouter>
            <Container maxWidth="lg">
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Grow in>
                        <Container>
                            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                                <Grid item xs={12} sm={7}>
                                        <Posts setCurrentId={setCurrentId}/>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grow>
                </Route>
                <Route path="/auth" exact component={Auth}/>
                <Route path="/profile" exact component={Profile}>
                    <Grow in>
                        <Container>
                            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                                <Grid item xs={12} sm={7}>
                                        <Profile setCurrentId={setCurrentId}/>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grow>
                </Route>
            </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App

