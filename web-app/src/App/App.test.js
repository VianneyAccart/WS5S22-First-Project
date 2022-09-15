import { render, screen } from "@testing-library/react";
import App from "./App";

test("`Wilders Book' is present", () => {
  render(<App />);
  const element = screen.getByText(/Wilders Book/i);
  expect(element).toBeInTheDocument();
});
