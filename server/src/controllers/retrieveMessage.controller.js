import db from "../db/db.js";

const retrieveMessage = async (req, res) => {
  try {
    const sql = "SELECT * FROM chatbot_db ORDER BY timestamp ASC";

    db.query(sql, (err, results) => {
      if (err) {
        throw err;
      }

      res.status(200).json({
        success: true,
        message: "data retrieve successfully",
        data: results,
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export default retrieveMessage;
