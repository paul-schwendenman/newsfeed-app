const state = {
  posts: [
    {
      id: "6c9df76e-eed4-4b51-a9d3-77d3d17e7a9b",
      body: "Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.",
      author: {
        name: "Nickmercs",
      },
      createdAt: "2023-03-15 11:50",
      likes: 0,
      shareCount: 12,
      viewCount: 100,
    },
    {
      id: "9a478b7e-4030-4fc9-bcf8-7bd9e6cf5865",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: {
        name: "Dan",
      },
      createdAt: "2023-03-14 13:12",
      likes: 24,
      viewCount: 50,
      comments: [
        {
          id: "c393b8f0-ed73-4201-9be7-94f7a2b9d1ff",
          body: "Duis aute irure dolor in reprehenderit in voluptate velit.",
          author: {
            name: "Ann",
          },
          createdAt: "2023-03-14 14:56",
          likes: 0,
        },
      ],
    },
  ],
};

export default state;
