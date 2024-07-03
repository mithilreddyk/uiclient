// PostCard.js
import React from 'react';
import styles from '../css/PostCard.module.css';

const PostCard = ({ id, title, content, date, user, onDelete }) => {

  const onEdit = (post_id) =>{
    window.location.href = `/edit/${post_id}`;
  }
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <div className={styles.meta}>
        <span>Posted on: {new Date(date).toLocaleDateString()}</span>
        <span>By: {user}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onEdit(id)} className={styles.editButton}>Edit</button>
        <button onClick={() => onDelete(id)} className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
};

export default PostCard;