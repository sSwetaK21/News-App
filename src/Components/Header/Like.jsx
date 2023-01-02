import React, { useState } from "react";
function Like() {
  let initialvalue = 0;
  const [like, setlike] = useState(initialvalue);
  const [dislike, setdislike] = useState(0);

  const handlelike = () => {
    setlike((pre) => pre + 1);
    if (dislike > 0) {
      setdislike((pre) => pre - 1);
    }
  };
  const handledislike = () => {
    setdislike((pre) => pre + 1);
    if (like > 0) {
      setlike((pre) => pre - 1);
    }
  };
  return (
    <div className="btn-like">
      <img
        src="https://www.pngfind.com/pngs/m/5-58540_thumb-signal-computer-icons-encapsulated-postscript-thumbs-up.png"
        alt=""
        className="likebtn"
        onClick={handlelike}
      />{" "}
      {like}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpg1E2fRxZZqArw9Uxot-yPxps2XzS5XJ6A&usqp=CAU"
        className="likebtn"
        onClick={handledislike}
      ></img>
       {dislike}
    </div>
  );
}

export default Like;
