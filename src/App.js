import React, { useState, useEffect } from "react";
import axios from "axios";
import UserReplies from "./components/UserReplies";
import Chat from "./components/Chat";

const url = "https://example-chatbot-11.herokuapp.com/reply";

const initialState = {
  userReplies: [
    `Can you direct me to Jordan's portfolio?`,
    "How can I learn Rivescript?",
    "What color should we paint the DNP office?",
    "Show me a picture.",
    "Help me find a podcast."
  ],
  chatStorage: ["What can I help you with?"],
  question: "",
  title: ""
};

function App() {
  const [state, setState] = useState(initialState);

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
    // Loads first question from bot.
    axios
      .post(url, {
        username: "jdog",
        message: "lets start"
      })
      .then(res => {
        setState(prevState => {
          return {
            ...prevState,
            title: res.data.reply
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
            "What color should we paint the DNP office?",
            "Show me a picture.",
            "Help me find a podcast."
          ],
          chatStorage: ["What can I help you with?"]
        };
      });
    }

    // If we ask a question that includes the word color, set the userReplies to an array of colors.
    if (state.question.includes("color")) {
      setState(prevState => {
        return {
          ...prevState,
          userReplies: [
            "Red",
            "Orange",
            "Yellow",
            "Green",
            "Blue",
            "Purple",
            "Black",
            "White",
            "Grey",
            "Sarcoline"
          ]
        };
      });
    }

    if (state.question.includes("Show me a picture.")) {
      setState(prevState => {
        return {
          ...prevState,
          userReplies: ["The DNP office.", "Google's Headquarters.", "Reid Hoffman."]
        };
      });
    }

    if (state.question.includes("podcast")) {
      setState(prevState => {
        return {
          ...prevState,
          userReplies: ["Business.", "Non-fiction story-telling."]
        };
      });
    }

    if (state.question === 'Business.') {
      setState(prevState => {
        return {
          ...prevState,
          userReplies: ["This Week in Startups", "Angelist Podcast", "First Round", "The Pitch"]
        };
      });
    }

    if (state.question === 'Non-fiction story-telling.') {
      setState(prevState => {
        return {
          ...prevState,
          userReplies: ["Heavyweights", "Dax Shepherd", "Crimetown"]
        };
      });
    }

    // Ending of question phase statements.
    switch (state.question) {
      case "Red":
      case "Orange":
      case "Yellow":
      case "Green":
      case "Blue":
      case "Purple":
      case "Black":
      case "White":
      case "Grey":
      case "Sarcoline":
      case "Can you direct me to Jordan's portfolio?":
      case "How can I learn Rivescript?":
      case "The DNP office.":
      case "Google's Headquarters.":
      case "Reid Hoffman.":
      case "This Week in Startups":
      case "Angelist Podcast":
      case "First Round":
      case "The Pitch":
      case "Heavyweights":
      case "Dax Shepherd":
      case "Crimetown":
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
      <h1>{state.title}</h1>
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
