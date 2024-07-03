// CreateEditPost.js
import React, { useState, useEffect } from 'react';
import styles from '../css/CreateEditPost.module.css';

const CreateEditPost = ({ post, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: post?.id, title, content });
  };

  return (
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
  );
};

export default CreateEditPost;