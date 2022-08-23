import React, { useState, useEffect } from "react";
import Header from "./Header";
import ChatBody from "./ChatBody";
import TextBox from "./TextBox";
import db from "./firebase";

import "./App.css";

const App = () => {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("time", "asc")
      .onSnapshot((snapShot) => {
        setMsg(
          snapShot.docs.map((doc) => {
            return [doc.data().message];
          })
        );
      });
  }, []);

  return (
    <>
      <Header />
      <div className="chat__box">
        {msg.map((chats, index) => {
          return <ChatBody key={index} message={chats} />;
        })}
      </div>
      <TextBox />
    </>
  );
};

export default App;

//3:39:10 time bata tya dekha ko code lai simply copy garera mero app js file ma halni ani tya bata chatbody component
//lai props pass gardeni ani chatbody bata props tanera display garni...
