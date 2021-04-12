import classes from "./styles/post-detail.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Title 1",
  image: "getting-started-nextjs.png",
  data: "2022-02-10",
  content: "# This is a first post",
};
const PostContent = () => {
  const imagePath = `images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
