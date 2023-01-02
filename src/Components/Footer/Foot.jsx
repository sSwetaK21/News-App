import React, { useState, useEffect } from "react";
import "./Foot.css";
function Foot() {
  //   const current = new Date().toLocaleString();
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(
      () => setTime(Date().toJSON().slice(11, 21)),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="foot">
        <a href="#" className="top">
          &#8593;
        </a>

        <p className="rights">Copyrights are reserved</p>
        <div className="date">
          <h4>Current Date & Time : {time}</h4>
        </div>
       
      </div>
    </>
  );
}

export default Foot;
