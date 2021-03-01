import React , {useState} from 'react'
import useStyles from "./styles"
import {useSelector} from "react-redux"
import {Grid , CircularProgress } from "@material-ui/core"
import Post from "../Posts/Post/Post"
function Profile({setCurrentId}) {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts)
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    return (
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}> 
                {
                    posts.map((post) => (
                        post.creator === user.result.googleId || post.creator === user.result._id) && (
                        <Grid key={post._id} item sx={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                        ))
                    
                }
            </Grid>
    ))
}

export default Profile
