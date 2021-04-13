import PostsGrid from "./posts-grid";
import classes from "./styles/posts.module.css";
import Head from "next/head";

const AllPosts = (props) => {
  return (
    <div>
      <Head>
        <meta name="description" content="All my posts!" />
      </Head>
      <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={props.posts} />
      </section>
    </div>
  );
};

export default AllPosts;
