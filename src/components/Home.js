// Homepage.js
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import styles from "../css/Home.module.css"; // Example CSS for styling
import axios from "axios";

// const posts = [
//   { id: 1, title: 'Post 1', content: 'Content of Post 1' },
//   { id: 2, title: 'Post 2', content: 'Content of Post 2' },
//   { id: 3, title: 'Post 3', content: 'Content of Post 3' },
//   // Add more posts as needed
// ];

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/post/allposts").then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <div className={styles.homepage}>
      <div style={{width:"100%"}}>
        <div className={styles.button_wrapper}>
          {" "}
          <h1>All Posts</h1>
          <button
            onClick={() => {
              window.location.href = "/create";
            }}
            className={styles.submitButton}
          >
            Add Post
          </button>
        </div>
      </div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.postcontent}
          id={post._id}
        />
      ))}
    </div>
  );
};

export default Homepage;
