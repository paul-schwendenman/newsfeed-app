import { render } from "@testing-library/svelte";
import Comment from "../Comment.svelte";
import { AuthorModel, CommentModel } from "../models";

test("should render", () => {
  const author = AuthorModel.build({
    name: "Gyasi Zardes",
    authorImageUrl: "/headshots/zardes_gyasi.png"
  });

  const comment = CommentModel.build({
    author,
    text: "This is a comment",
    createdAt: "2021-11-22 17:50",
    likes: 10
  });

  const results = render(Comment, { props: { ...comment } });

  expect(() => results.getByText("This is a comment")).not.toThrow();
  expect(() => results.getByText("Gyasi Zardes")).not.toThrow();
  expect(() => results.getByText("10 likes")).not.toThrow();
});
