import React from "react";

export default function UserReplies({ state, setQuestion, setState }) {
  return (
    <div className="user_replies_container">
      {state.userReplies.map((question, i) => {
        return (
          <input
            type="button"
            onClick={setQuestion(setState)}
            value={question}
            key={i}
          />
        );
      })}
    </div>
  );
}
