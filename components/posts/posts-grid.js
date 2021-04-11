import classes from "./styles/posts-grid.module.css";
import PostItem from "./post-item";

const PostsGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
};

export default PostsGrid;
