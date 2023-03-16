import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the default post", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Donec ullamcorper nulla non metus auctor fringilla/i
  );
  expect(linkElement).toBeInTheDocument();
});
