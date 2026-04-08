import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@testing-library/jest-dom";

test("adds and deletes note", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText(/add notes/i));
  fireEvent.change(screen.getByPlaceholderText(/enter title/i), {
    target: { value: "New Note" }
  });
  fireEvent.change(screen.getByPlaceholderText(/enter content/i), {
    target: { value: "New Content" }
  });

  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText(/new note/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText("✖"));
  expect(screen.queryByText(/new note/i)).not.toBeInTheDocument();
});