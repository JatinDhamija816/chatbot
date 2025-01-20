import axios from "axios";
import db from "../db/db.js";
import { getNLPInstance } from "../config/nlp.js";

const sendMessage = async (req, res) => {
  try {
    const userMessage = req.body.message;
    const nlp = getNLPInstance();

    const response = await nlp.process("en", userMessage);
    let botReply = response.answer || "Sorry, I didn’t understand that.";

    if (response.intent === "greetings.joke" || userMessage.includes("joke")) {
      try {
        const jokeResponse = await axios.get(
          "https://official-joke-api.appspot.com/jokes/random"
        );
        botReply = `${jokeResponse.data.setup} ${jokeResponse.data.punchline}`;
      } catch (error) {
        botReply = "Sorry, I couldn’t fetch a joke right now.";
      }
    }

    const sql =
      "INSERT INTO chatbot_db (user_message, bot_reply) VALUES (?, ?)";

    db.query(sql, [userMessage, botReply], (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json({
        success: true,
        message: botReply,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export default sendMessage;
