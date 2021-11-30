import { render } from "@testing-library/svelte";
import Post from "../Post.svelte";
import { PostModel } from "../models";

test("should render", () => {
  let post = PostModel.build({
    author: "Gyasi Zardes",
    authorImageUrl: "/headshots/zardes_gyasi.png",
    body: "This is a post",
    createdAt: "2021-11-22 17:50",
    likes: 10
  });

  const results = render(Post, { props: { post } });

  expect(() => results.getByText("This is a post")).not.toThrow();
  expect(() => results.getByText("Gyasi Zardes")).not.toThrow();
  expect(() => results.getByText("10 Likes")).not.toThrow();
});
