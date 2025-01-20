import axios from "axios";
import { SERVER_PORT } from "./constants";

export const sendMessageApi = async (message) => {
  try {
    const res = await axios.post(`${SERVER_PORT}/message/send-message`, {
      message,
    });

    return res.data;
  } catch (error) {
    return error;
  }
};

export const retrieveMessageApi = async () => {
  try {
    const res = await axios.get(`${SERVER_PORT}/message/retrieve-message`);

    return res.data;
  } catch (error) {
    return error;
  }
};
