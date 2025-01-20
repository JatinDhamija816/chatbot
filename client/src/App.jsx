import { useState, useEffect, useRef } from "react";
import { retrieveMessageApi, sendMessageApi } from "./utils/api";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const fetchMessages = async () => {
    try {
      const res = await retrieveMessageApi();

      if (res.success) {
        setMessages(res.data);
      }
    } catch (error) {
      console.error("Error while retrieving message:", error);
      alert("Error retrieving messages.");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    try {
      const res = await sendMessageApi(input);

      if (res.success) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user_message: input, bot_reply: res.message },
        ]);
        setInput("");
      } else {
        setInput("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-lg p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Chatbot
        </h1>

        <div
          className="h-72 overflow-y-auto bg-gray-100 p-4 rounded-lg shadow-inner mb-4"
          style={{ maxHeight: "400px" }}
        >
          {messages.map((msg, index) => (
            <div key={index} className="mb-4">
              <p className="text-sm text-gray-600">
                <strong className="text-blue-500">You:</strong>{" "}
                {msg.user_message}
              </p>
              <p className="text-sm text-gray-800">
                <strong className="text-green-500">Bot:</strong> {msg.bot_reply}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
