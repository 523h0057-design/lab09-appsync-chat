import "./App.css";
import { useEffect, useState, useRef } from "react";

import { generateClient } from "aws-amplify/api";

import { listMessages } from "./graphql/queries";
import { sendMessage } from "./graphql/mutations";
import { onSendMessage } from "./graphql/subscriptions";

const client = generateClient();

function App() {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  const scrollRef = useRef(null);

  // Load messages + subscription
  useEffect(() => {
    loadMessages();

    const subscription = client
      .graphql({ query: onSendMessage })
      .subscribe({
        next: ({ data }) => {
          const newMsg = data.onSendMessage;

          setMessages((prev) => [...prev, newMsg]);
        },
        error: (err) => console.error("Subscription error:", err),
      });

    return () => subscription.unsubscribe();
  }, []);

  // Auto scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Fetch messages
  async function loadMessages() {
    try {
      const res = await client.graphql({ query: listMessages });
      setMessages(res.data.listMessages);
    } catch (err) {
      console.error("Load message error:", err);
    }
  }

  // Send message
  async function handleSend() {
    if (!content.trim()) return;

    await client.graphql({
      query: sendMessage,
      variables: {
        content,
        sender: "Quang",
      },
    });

    setContent("");
  }

  return (
    <div className="container">
      <h1>AppSync Chat</h1>

      <div className="messages" ref={scrollRef}>
        {messages.map((m) => (
          <div key={m.id} className="msg">
            <b>{m.sender}: </b> {m.content}
          </div>
        ))}
      </div>
      
      <div className="input-area">
        <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Input a message..."
      />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
