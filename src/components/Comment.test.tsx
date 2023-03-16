import React from "react";
import { render, screen } from "@testing-library/react";
import Comment from "./Comment";
import { CommentType } from "../types/comment";

test("renders a comment", () => {
  const mockDispatch = jest.fn();
  const comment = {
    body: "This is a comment",
    author: {},
  } as CommentType;
  const postId = "fb3f01be-95c9-4474-b321-57e1dd890943";

  render(<Comment dispatch={mockDispatch} comment={comment} postId={postId} />);
  const commentBody = screen.getByText(/This is a comment/);
  expect(commentBody).toBeInTheDocument();
});

test("renders a comment's author", () => {
  const mockDispatch = jest.fn();
  const comment = {
    author: {
      name: "Tim",
    },
  } as CommentType;
  const postId = "fb3f01be-95c9-4474-b321-57e1dd890943";

  render(<Comment dispatch={mockDispatch} comment={comment} postId={postId} />);
  const commentAuthor = screen.getByText(/Tim/);
  expect(commentAuthor).toBeInTheDocument();
});
