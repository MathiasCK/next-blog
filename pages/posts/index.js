import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Title 1",
    image: "getting-started-nextjs.png",
    excerpt: "Title text 1",
    data: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Title 2",
    image: "getting-started-nextjs.png",
    excerpt: "Title text 2",
    data: "2023-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Title 3",
    image: "getting-started-nextjs.png",
    excerpt: "Title text 3",
    data: "2023-02-10",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
