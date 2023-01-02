import React, { useState } from "react";

const comment = {
  width: "90%",
  height: "40px",
  margin: "0px 10px" ,
  padding: "12px",
  borderRadius: "4px",
 
}
function Comment() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const handleInput = (event) => {
    setCommentText(event.target.value);
  };
  const handleComment = () => {
    setComments([...comments, commentText]);
  };

  return (
    <>
      <input
        id="comment"
        type="text"
        placeholder="Leave a comment..."
        value={commentText}
        onChange={handleInput}
        style={comment}
      />
      <button onClick={handleComment} className="post">
        Post
      </button>
      {comments.map((comment) => (
        <div>
          <h3>{comment}</h3>
        </div>
      ))}
    </>
  );
}
export default Comment;
