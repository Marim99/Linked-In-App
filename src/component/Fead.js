import "../style/Feed.css";
import { MdEdit } from "react-icons/md";
import { HiPhotograph } from "react-icons/hi";
import { RiVideoFill, RiArticleFill } from "react-icons/ri";
import { BsCalendar2EventFill } from "react-icons/bs";
import InputOption from "./InputOption";
import Post from "./Post";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
const Feed = () => {
  const user = useSelector(selectUser);
  const [post, setPost] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        ),
      );
  }, []);
  const sendPost = (event) => {
    event.preventDefault();
    console.log(event.preventDefault());
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <MdEdit />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed-inputOptions">
          <InputOption title={"Photo"} Icon={HiPhotograph} color="#70b5f9" />
          <InputOption title={"Video"} Icon={RiVideoFill} color="#5f9b41" />
          <InputOption
            title={"Event"}
            Icon={BsCalendar2EventFill}
            color="#c37d16"
          />
          <InputOption
            title={"Write Artical"}
            Icon={RiArticleFill}
            color="#e16745"
          />
        </div>
      </div>
      <FlipMove>
        {post &&
          post.map(({ id, data: { name, description, message, photoURL } }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
            />
          ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
