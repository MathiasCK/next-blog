import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../utils/posts-utils";
import Head from "next/head";

const AllPostsPage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Blog | All Posts</title>
        <meta name="description" content="NextJS Blog" />
      </Head>
      <AllPosts posts={props.posts} />
    </div>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
