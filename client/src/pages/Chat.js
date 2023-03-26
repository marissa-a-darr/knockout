import React from "react";
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  minHeight: "100vh"

}
const Chat = () => {
  console.log("this is the chat")
  return (
    <div className="container" style={myStyle}>
        This is the Chat Page!
    </div>
  );
};

export default Chat;
