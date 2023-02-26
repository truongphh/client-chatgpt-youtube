import React, { useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { useEffect } from "react";

const ChatBody = ({ chat }) => {
  const aiStyle = "mr-auto ai-msg";
  const normalStyle = "normal-msg";
  const parent = useRef(null);
  const bottomRef = useRef(null);

  // only for aut animations
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  //for scrolling bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="flex flex-col gap-4 p-3" ref={parent}>
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`break-words msg self-end px-2 py-1 max-w-[80%] ${
              message.sender === "ai" ? aiStyle : normalStyle
            }`}
          >
            <pre className="whitespace-pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}

      <div ref={bottomRef} className="h-3"></div>
    </div>
  );
};

export default ChatBody;
