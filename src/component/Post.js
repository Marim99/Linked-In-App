import "../style/Post.css";
import InputOption from "./InputOption";
import { AiFillLike, AiOutlineMessage } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { IoIosSend } from "react-icons/io";
import { forwardRef } from "react";
const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  const user = useSelector(selectUser);
  return (
    <div ref={ref} className="post">
      <div className="post-header">
        <div className="post-avatar">
          {photoURL ? <img src={photoURL} alt="" /> : <h1>{name[0]}</h1>}
        </div>
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-buttons">
        <InputOption Icon={AiFillLike} title={"Like"} color="gray" />
        <InputOption Icon={AiOutlineMessage} title={"Comment"} color="gray" />
        <InputOption Icon={FaShare} title={"Share"} color="gray" />
        <InputOption Icon={IoIosSend} title={"Send"} color="gray" />
      </div>
    </div>
  );
});
export default Post;
