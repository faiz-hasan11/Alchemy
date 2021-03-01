import React from 'react'
import useStyles from "./styles"
import {useSelector} from "react-redux"
import {Grid , CircularProgress } from "@material-ui/core"
import Post from "./Post/Post"
function Posts({setCurrentId}) {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts)
    return (
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}> 
                {
                    posts.map((post) => (
                        <Grid key={post._id} item sx={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                            {console.log(post)}
                        </Grid>
                    ))
                }
            </Grid>
    ))
}

export default Posts
