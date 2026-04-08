const fs = require("fs");
const path = require("path");
const questionsPath = path.join(__dirname, "../data/questions.json");
const responsesPath = path.join(__dirname, "../data/responses.json");
const getQuestions = () => {
  const data = fs.readFileSync(questionsPath);
  return JSON.parse(data);
};
const saveResponses = (responses) => {
  const ids = responses.map(r => r.questionId);
  if (new Set(ids).size !== ids.length) {
    throw new Error("Questions must be unique");
  }
  responses.forEach(r => {
    if (!r.answer || r.answer.length < 5 || r.answer.length > 255) {
      throw new Error("Answer must be 5–255 characters"); 
    }
    if (r.answer !== r.confirmAnswer) {
      throw new Error("Answers do not match");
      
    }
  });
  const cleanData = responses.map(r => ({
    userId: r.userId,
    questionId: r.questionId,
    answer: r.answer
  }));
  fs.writeFileSync(responsesPath, JSON.stringify(cleanData, null, 2));
  return { message: "Saved successfully" };
};

module.exports = { getQuestions, saveResponses };