import FeaturedPosts from "../components/home-page/featured-posts";

import Hero from "../components/home-page/hero";

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
const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
};

export default HomePage;
