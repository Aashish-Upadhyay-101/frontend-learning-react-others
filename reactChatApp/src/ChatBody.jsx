import React from "react";

const ChatBody = (props) => {
  return (
    <div className="chat__msg">
      {/* <h2>Aashish up</h2> */}
      <p>{props.message}</p>
    </div>
  );
};

export default ChatBody;
