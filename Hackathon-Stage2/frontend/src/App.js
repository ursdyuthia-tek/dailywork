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
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/questions")
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));

    const savedForm = localStorage.getItem("form");
    const savedSubmissions = localStorage.getItem("submissions");

    if (savedForm) setForm(JSON.parse(savedForm));
    if (savedSubmissions) setSubmissions(JSON.parse(savedSubmissions));
  }, []);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  }, [submissions]);

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

  const isFormValid = () => {
    const allFilled = form.every(f => f.questionId && f.answer && f.confirmAnswer);
    const noErrors = Object.values(errors).every(
      e => !e?.question && !e?.answer && !e?.confirm
    );
    return allFilled && noErrors;
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;

    const payload = form.map(f => ({
      userId: 101,
      questionId: Number(f.questionId),
      answer: f.answer,
      confirmAnswer: f.confirmAnswer
    }));

    try {
      await axios.post("http://localhost:5000/api/responses", payload);

      const newSubmission = {
        id: submissions.length + 1,
        data: payload
      };

      setSubmissions([...submissions, newSubmission]);

      setForm([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
      ]);
      setErrors({});
      setSelectedSubmission(null);

    } catch (err) {
      console.log(err.response?.data?.error || "Error saving data");
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
            q => !selectedIds.includes(String(q.questionId)) && q.question
          );

          return (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "8px"
              }}
            >
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

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            style={{
              backgroundColor: isFormValid() ? "#007bff" : "#ccc",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: isFormValid() ? "pointer" : "not-allowed"
            }}
          >
            Submit
          </button>
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          {submissions.map((sub) => (
            <p
              key={sub.id}
              style={{ cursor: "pointer", color: "blue", margin: "5px" }}
              onClick={() => setSelectedSubmission(sub)}
            >
              Submit{sub.id}
            </p>
          ))}
        </div>

        {selectedSubmission && (
          <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <h3>Submitted Data</h3>

            {selectedSubmission.data.map((item, index) => {
              const questionText = questions.find(
                q => q.questionId === item.questionId
              )?.question;

              return (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <p><b>Question:</b> {questionText}</p>
                  <p><b>Answer:</b> {item.answer}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;