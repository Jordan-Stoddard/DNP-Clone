import React from "react";
import bot from "../assets/icons8-bot-48.png";
import { ReactComponent as UserImage } from "../assets/user-male-black-shape.svg";
import {
  checkForLink,
  returnLink,
  returnLinkText,
  checkForPicture
} from "../helper-functions/chatbot-helpers";

export default function Chat({ state }) {
  return (
    <div className="chat_container">
      {state.chatStorage.map((string, i) => {
        const even = i % 2 === 0;
        return (
          <div key={i}>
            <div className={even ? "bot_reply" : "user_reply"}>
              {even ? (
                <img src={bot} alt="chatbot" />
              ) : (
                <div className="user_img_bg">
                  <UserImage />
                </div>
              )}

              <p>
                {string}
                {checkForLink(string) && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={returnLink(string)}
                  >
                    {returnLinkText(string)}
                  </a>
                )}
              </p>
            </div>
            {checkForPicture(string) && (
              <img
                className="requested_image"
                src={returnLink(string)}
                alt="requested"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
