import PostContent from "../../components/posts/posts-detail/post-content";
import { getPostData, getPostsFiles } from "../../utils/posts-utils";

const PostDetail = (props) => {
  return <PostContent data={props.post} />;
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600, // Ensure that if we ever update .md without rebuilding the whole application, we'll still get the latest data at least once every 10 minutes
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug },
    })),
    fallback: false,
  };
};

export default PostDetail;
