import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import db from "./firebase";

const TextBox = () => {
  const [chatMessage, setChatMessage] = useState("");

  const messagefield = (e) => {
    setChatMessage(e.target.value);
  };

  const sendMessage = () => {
    db.collection("messages").add({
      message: chatMessage,
      time: new Date(),
    });
    setChatMessage("");
  };

  return (
    <div className="type__msg">
      <input
        type="text"
        placeholder="write a message..."
        onChange={messagefield}
        value={chatMessage}
      />
      <Button onClick={sendMessage}>
        <SendIcon style={{ fontSize: "40px", color: "blue", margin: "1rem" }} />
      </Button>
    </div>
  );
};

export default TextBox;
