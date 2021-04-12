import classes from "./styles/post-detail.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const PostContent = (props) => {
  const { data } = props;
  const imagePath = `/images/posts/${data.slug}/${data.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={data.title} image={imagePath} />
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
