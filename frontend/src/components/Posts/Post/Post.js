import "./styles.scss"
import React from 'react';
import { Button } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import ThumbUpAltButton from "@material-ui/icons/ThumbUpAlt"
import { likePost, deletePost } from '../../../actions/posts';


const user = JSON.parse(localStorage.getItem('profile'))
const Post = ({ post , setCurrentId}) => {
  const dispatch = useDispatch();

  // console.log(user.result)
  // console.log(post)
  const Likes = () =>
    {
        if(post.likes.length > 0)
        {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ?(
                <><ThumbUpAltButton fontSize="small"/>&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length -1} others` : `${post.likes.length} likes`}</>
            ) : (
                <><ThumbUpAltButton fontSize="small"/>&nbsp;{post.likes.length} Likes</>
            )
        }
        return <><ThumbUpAltButton fontSize="small"/>&nbsp;Likes</>
    }
  return (
<div className="row">
  <div className="example-1 card">
    <div className="wrapper">
      <img src={post.selectedFile} alt="" style={{height: "100%",width:"100%",paddingTop: '0%',paddingBottom:"0%",objectFit:"contain"}}/>
      <div className="date">
        <span className="day">{moment(post.createdAt).fromNow()}</span>
      </div>
      <div className="data">
        <div className="content">
          <span className="author">{post.name}</span><br></br>
          <span className="text"><em>{post.tags.map((tag) => `#${tag} `)}</em></span>
          <h1 className="title">{post.title}</h1>
          <p className="text">{post.message}</p>
          {( user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) &&
                        (<label htmlFor="show-menu" className="menu-button" onClick={() => {setCurrentId(post._id)}}><span></span></label>)}
           <Button size="small" color="primary" disabled={!user?.result} onClick={() => {dispatch(likePost(post._id))}}><Likes/> </Button>
            {
                        (user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) &&
                        (
                          <Button size="small" color="primary" disabled={!user?.result} onClick={() => {dispatch(deletePost(post._id))}}><DeleteIcon fontSize="small" /> Delete</Button>
                        )
            }
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Post;