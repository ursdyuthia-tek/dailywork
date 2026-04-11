const express = require("express");
const router = express.Router();
const { getQuestions, saveResponses } = require("../services/questionServices");

router.get("/questions", (req, res) => {
  try {
    const data = getQuestions();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post("/responses", (req, res) => {
  try {
    const result = saveResponses(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
