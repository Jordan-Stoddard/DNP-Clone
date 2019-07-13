import React, { useState, useEffect } from "react";
import axios from "axios";
import UserReplies from "./components/UserReplies";
import Chat from "./components/Chat";

const url = "http://localhost:2001/reply";

const initialState = {
  userReplies: [
    `Can you direct me to Jordan's portfolio?`,
    "How can I learn Rivescript?",
    "What color should we paint the DNP office?"
  ],
  chatStorage: [],
  question: "",
};

function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {}, []);

  const setQuestion = setState => e => {
    e.persist();
    setState(prevState => {
      return {
        ...prevState,
        question: e.target.value,
        chatStorage: [...prevState.chatStorage, e.target.value]
      };
    });
  };

  useEffect(() => {
    axios
      .post("https://example-chatbot-11.herokuapp.com/reply", {
        username: "jdog",
        message: "lets start"
      })
      .then(res => {
        setState(prevState => {
          return {
            ...prevState,
            chatStorage: [res.data.reply]
          };
        });
      });

    // Only update the chatStorage with the reply if state.question has a value.
    // This will prevent us from sending a reply on first mount.
    if (state.question && state.question !== "Back") {
      axios.post(url, { username: "jdog", message: state.question }).then(res =>
        setState(prevState => {
          return {
            ...prevState,
            chatStorage: [...prevState.chatStorage, res.data.reply]
          };
        })
      );
    } else if (state.question === "Back") {
      setState(prevState => {
        return {
          ...prevState,
          userReplies: [
            `Can you direct me to Jordan's portfolio?`,
            "How can I learn Rivescript?",
            "What color should we paint the DNP office?"
          ],
          chatStorage: []
        };
      });
    }

    // If we ask a question that includes the word color, set the userReplies to an array of colors.
    if (state.question.includes("color")) {
      setState(prevState => {
        return {
          ...prevState,
          userReplies: [
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "purple",
            "black",
            "white",
            "grey",
            "sarcoline"
          ]
        };
      });
    }

    // Ending of question phase statements.
    switch (state.question) {
      case "red":
      case "orange":
      case "yellow":
      case "green":
      case "blue":
      case "purple":
      case "black":
      case "white":
      case "grey":
      case "sarcoline":
      case "Can you direct me to Jordan's portfolio?":
      case "How can I learn Rivescript?":
        setState(prevState => {
          return {
            ...prevState,
            userReplies: ["Back"]
          };
        });
        break;
      default:
        break;
    }
  }, [state.question]);

  return (
    <div className="app_container">
      <h1>{state.question}</h1>
      <Chat state={state} />
      <UserReplies
        state={state}
        setState={setState}
        setQuestion={setQuestion}
      />
    </div>
  );
}

export default App;
