import { render } from "@testing-library/svelte";
import { postStore } from "../stores";
import Feed from "../Feed.svelte";
import { PostModel } from "../models";

test("should render", () => {
  let posts = postStore([
    PostModel.build({
      author: "Gyasi Zardes",
      authorImageUrl: "/headshots/zardes_gyasi.png",
      body: "This is a post",
      createdAt: "2021-11-22 17:50",
    })
  ]);

  const author = {
    name: "Harrison Afful",
    imageUrl: "/headshots/afful_harrison.png"
  };
  const results = render(Feed, { props: { posts, author } });

  expect(() => results.getByText("This is a post")).not.toThrow();
});
