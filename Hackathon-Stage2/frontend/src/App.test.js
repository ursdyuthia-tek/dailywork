import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import axios from "axios";

jest.mock("axios");

beforeEach(() => {
  axios.get.mockResolvedValue({
    data: [{ questionId: 1, question: "Test Question" }]
  });
});

test("renders heading", () => {
  render(<App />);
  expect(screen.getByText("Security Questions")).toBeInTheDocument();
});

test("shows error for empty answer", async () => {
  render(<App />);

  const input = screen.getAllByPlaceholderText("Answer")[0];

  fireEvent.change(input, { target: { value: "hello" } });
  fireEvent.change(input, { target: { value: "" } });

  await waitFor(() => {
    expect(screen.getAllByText(/Answer is required/i).length).toBeGreaterThan(0);
  });
});

test("shows error for short answer", async () => {
  render(<App />);

  const input = screen.getAllByPlaceholderText("Answer")[0];

  fireEvent.change(input, { target: { value: "abc" } });

  await waitFor(() => {
    expect(screen.getByText("Answer must be 5–255 characters")).toBeInTheDocument();
  });
});

test("shows mismatch error", async () => {
  render(<App />);

  const answer = screen.getAllByPlaceholderText("Answer")[0];
  const confirm = screen.getAllByPlaceholderText("Confirm Answer")[0];

  fireEvent.change(answer, { target: { value: "hello123" } });
  fireEvent.change(confirm, { target: { value: "wrong123" } });

  await waitFor(() => {
    expect(screen.getByText("Answers do not match")).toBeInTheDocument();
  });
});

test("toggle hide answers", () => {
  render(<App />);

  const btn = screen.getByText("Hide Answer(s)");
  fireEvent.click(btn);

  expect(screen.getByText("Show Answer(s)")).toBeInTheDocument();
});