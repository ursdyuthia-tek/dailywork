import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionDD from "./components/questionDD";
function App() {
  const [questions, setQuestions] = useState([]);
  const [hideAnswers, setHideAnswers] = useState(false);
  const [form, setForm] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ]);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5000/api/questions")
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));
  }, []);
  const handleChange = (id, field, value) => {
    const updated = form.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setForm(updated);
    const newErrors = { ...errors };
    const current = updated.find(f => f.id === id);
    if (!current.questionId) {
      newErrors[id] = { ...newErrors[id], question: "Question is required" };
    } else {
      newErrors[id] = { ...newErrors[id], question: "" };
    }

    if (!current.answer) {
      newErrors[id] = { ...newErrors[id], answer: "Answer is required" };
    } else if (current.answer.length < 5 || current.answer.length > 255) {
      newErrors[id] = { ...newErrors[id], answer: "Answer must be 5–255 characters" };
    } else {
      newErrors[id] = { ...newErrors[id], answer: "" };
    }

    if (!current.confirmAnswer) {
      newErrors[id] = { ...newErrors[id], confirm: "Confirm answer is required" };
    } else if (current.answer !== current.confirmAnswer) {
      newErrors[id] = { ...newErrors[id], confirm: "Answers do not match" };
    } else {
      newErrors[id] = { ...newErrors[id], confirm: "" };
    }

    setErrors(newErrors);
  };

  const handleSubmit = async () => {
    const hasError = Object.values(errors).some(
      e => e.question || e.answer || e.confirm
    );
    if (hasError) return;

    const payload = form.map(f => ({
      userId: 101,
      questionId: Number(f.questionId),
      answer: f.answer,
      confirmAnswer: f.confirmAnswer
    }));
    try {
      await axios.post("http://localhost:5000/api/responses", payload);
      alert("Updated successfully");
    } catch (err) {
      alert(err.response?.data?.error || "Error saving data");
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "70%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "16px" }}>Security Questions</span>
          <span style={{ cursor: "pointer" }}>✖</span>
        </div>
        <br />
        {form.map((item, index) => {
          const selectedIds = form
            .filter(f => f.id !== item.id)
            .map(f => String(f.questionId));

          const availableQuestions = questions.filter(
            q => !selectedIds.includes(String(q.questionId))
          );
          return (
            <div key={item.id} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px", borderRadius: "8px" }}>
              <QuestionDD
                data={item}
                questions={availableQuestions}
                onChange={handleChange}
                hideAnswers={hideAnswers}
                index={index}
                errors={errors[item.id] || {}}
              />
            </div>
          );
        })}
        <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "15px" }}>
          <button onClick={() => setHideAnswers(!hideAnswers)}>
            {hideAnswers ? "Show Answer(s)" : "Hide Answer(s)"}
          </button>
        </div>
        <p style={{ textAlign: "center" }}>
          The minimum length of the answer(s) should be 5 characters and maximum allowed is 255 characters
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handleSubmit}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default App;