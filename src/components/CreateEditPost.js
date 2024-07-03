// CreateEditPost.js
import React, { useState, useEffect,  } from 'react';
import styles from '../css/CreateEditPost.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CreateEditPost = ({ post, onSubmit }) => {
  const {post_id} = useParams()
  const [title, setTitle] = useState('');
  const [singlePost, setSinglePost] = useState('');
  const [content, setContent] = useState('');
  const [ user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    setUser(user);
    // const post = axios.post("http://localhost:5001/post/getpost",{id:post_id}).then(res=>{
    //   setSinglePost(res.data);
    // })
    if (singlePost) {
      setTitle(singlePost.title);
      setContent(singlePost.content);
    }
  }, [singlePost, post_id]);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("bef",{
      userID: user?._id,
      postcontent : content,
      title: title,
    })
    axios.post("http://localhost:5001/post/createpost",{
      userID: user?._id,
      postcontent : content,
      title: title,
    }).then(res=>{
      console.log(res.data);
    })
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>{post ? 'Edit Post' : 'Create New Post'}</h2>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <textarea
            placeholder="Post Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          {post ? 'Update' : 'Create'} Post
        </button>
      </form>
    </div>
  );
};

export default CreateEditPost;