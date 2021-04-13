import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../utils/posts-utils";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Blog | Home</title>
        <meta name="description" content="NextJS Blog" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </div>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
