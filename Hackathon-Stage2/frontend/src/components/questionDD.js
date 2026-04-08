import React from "react";

function QuestionDD({ data, questions, onChange, hideAnswers, index, errors }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Question {index + 1}:</label><br />

      <select
        value={data.questionId || ""}
        onChange={(e) => onChange(data.id, "questionId", e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      >
        <option value="">Please Select a Question</option>
        {questions.map((q) => (
          <option key={q.questionId} value={q.questionId}>
            {q.question}
          </option>
        ))}
      </select>
      {errors.question && <p style={{ color: "red", margin: 0 }}>{errors.question}</p>}

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <div style={{ flex: 1 }}>
          <input
            type={hideAnswers ? "password" : "text"}
            placeholder="Answer"
            value={data.answer || ""}
            onChange={(e) => onChange(data.id, "answer", e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.answer && <p style={{ color: "red", margin: 0 }}>{errors.answer}</p>}
        </div>

        <div style={{ flex: 1 }}>
          <input
            type={hideAnswers ? "password" : "text"}
            placeholder="Confirm Answer"
            value={data.confirmAnswer || ""}
            onChange={(e) => onChange(data.id, "confirmAnswer", e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.confirm && <p style={{ color: "red", margin: 0 }}>{errors.confirm}</p>}
        </div>
      </div>
    </div>
  );
}

export default QuestionDD;