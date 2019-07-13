import React from "react";

export default function Chat({ state }) {
  return (
    <div className="chat_container">
      {state.chatStorage.map((string, i) => {
        return <p key={i}>{string}</p>;
      })}
    </div>
  );
}
