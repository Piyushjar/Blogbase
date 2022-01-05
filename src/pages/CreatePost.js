import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title: title,
      post: post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  return (
    <div className="postPage">
      <div className="container">
        <h1>Create a Post</h1>
        <div className="postText">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div className="postText">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => setPost(event.target.value)}
          ></textarea>
        </div>
        <button className="submit-btn" onClick={createPost}>
          Submit Post
        </button>
      </div>
    </div>
  );
};
