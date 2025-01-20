import { dockStart } from "@nlpjs/basic";

let nlp;

export const initializeNLP = async () => {
  const dock = await dockStart({ use: ["Basic"] });
  nlp = dock.get("nlp");
  nlp.addLanguage("en"); // Adding English language

  // Greetings - Hello
  nlp.addDocument("en", "hello", "greetings.hello");
  nlp.addDocument("en", "hi", "greetings.hello");
  nlp.addDocument("en", "hey", "greetings.hello");
  nlp.addDocument("en", "what's up", "greetings.hello");
  nlp.addDocument("en", "heyy", "greetings.hello");
  nlp.addDocument("en", "hiya", "greetings.hello");

  nlp.addAnswer("en", "greetings.hello", "Hey there!");
  nlp.addAnswer("en", "greetings.hello", "Hi! How can I help you?");
  nlp.addAnswer("en", "greetings.hello", "Greetings! Hope you're doing well.");

  // Greetings - Bye
  nlp.addDocument("en", "goodbye", "greetings.bye");
  nlp.addDocument("en", "bye", "greetings.bye");
  nlp.addDocument("en", "see you later", "greetings.bye");
  nlp.addDocument("en", "catch you later", "greetings.bye");
  nlp.addDocument("en", "i'm leaving now", "greetings.bye");

  nlp.addAnswer("en", "greetings.bye", "Goodbye! Have a great day.");
  nlp.addAnswer("en", "greetings.bye", "See you soon!");
  nlp.addAnswer("en", "greetings.bye", "Take care, until next time.");

  // Jokes
  nlp.addDocument("en", "tell me a joke", "greetings.joke");
  nlp.addDocument("en", "make me laugh", "greetings.joke");
  nlp.addDocument("en", "do you know any jokes", "greetings.joke");

  // How are you
  nlp.addDocument("en", "how are you", "greetings.howareyou");
  nlp.addDocument("en", "how are you doing", "greetings.howareyou");
  nlp.addDocument("en", "what's up with you", "greetings.howareyou");

  nlp.addAnswer(
    "en",
    "greetings.howareyou",
    "I'm just a bot, but I'm doing great! How about you?"
  );
  nlp.addAnswer("en", "greetings.howareyou", "I'm here and ready to help you!");
  nlp.addAnswer(
    "en",
    "greetings.howareyou",
    "Feeling chatty as always. What can I do for you?"
  );

  // Bot capabilities
  nlp.addDocument("en", "what can you do", "bot.capabilities");
  nlp.addDocument("en", "what are your features", "bot.capabilities");
  nlp.addDocument("en", "how can you help me", "bot.capabilities");

  nlp.addAnswer(
    "en",
    "bot.capabilities",
    "I can chat with you, tell jokes, and assist with your queries. What do you need?"
  );
  nlp.addAnswer(
    "en",
    "bot.capabilities",
    "I'm here to provide answers, tell jokes, or just have a friendly chat!"
  );
  nlp.addAnswer(
    "en",
    "bot.capabilities",
    "I can help with a variety of tasks. Let me know what you're looking for!"
  );

  // Gratitude
  nlp.addDocument("en", "thank you", "greetings.thankyou");
  nlp.addDocument("en", "thanks", "greetings.thankyou");
  nlp.addDocument("en", "i appreciate it", "greetings.thankyou");

  nlp.addAnswer("en", "greetings.thankyou", "You're welcome!");
  nlp.addAnswer(
    "en",
    "greetings.thankyou",
    "No problem at all. Happy to help!"
  );
  nlp.addAnswer(
    "en",
    "greetings.thankyou",
    "Anytime. Let me know if you need more assistance!"
  );

  // Personal questions
  nlp.addDocument("en", "what's your name", "bot.name");
  nlp.addDocument("en", "do you have a name", "bot.name");
  nlp.addDocument("en", "who are you", "bot.name");

  nlp.addAnswer(
    "en",
    "bot.name",
    "I'm your friendly chatbot. You can call me whatever you like!"
  );
  nlp.addAnswer(
    "en",
    "bot.name",
    "I'm just your virtual assistant, here to help."
  );
  nlp.addAnswer(
    "en",
    "bot.name",
    "I go by many names, but you can call me your assistant."
  );

  // Small talk
  nlp.addDocument("en", "do you like music", "smalltalk.music");
  nlp.addDocument("en", "what kind of music do you like", "smalltalk.music");

  nlp.addAnswer(
    "en",
    "smalltalk.music",
    "I don't have ears, but I hear music is amazing!"
  );
  nlp.addAnswer(
    "en",
    "smalltalk.music",
    "I can’t listen to music, but if I could, I’d love it."
  );

  nlp.addDocument("en", "do you like movies", "smalltalk.movies");
  nlp.addAnswer(
    "en",
    "smalltalk.movies",
    "I don't watch movies, but I've heard they're great for storytelling!"
  );

  // Training the model
  await nlp.train();
  console.log("NLP Model trained successfully!");
};

export const getNLPInstance = () => {
  if (!nlp) {
    throw new Error("NLP has not been initialized. Call initializeNLP first.");
  }
  return nlp;
};
