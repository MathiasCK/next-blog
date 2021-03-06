import classes from "./styles/post-detail.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

// Themes for mastering javascript blogpost
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

// Instead of
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism/";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    // Changes how paragraohs are rendered
    paragraph(paragraph) {
      const { node } = paragraph;
      // <Image /> rendered in <p> tag fix
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    // Themes for mastering javascript blogpost code section
    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHighlighter
          language={language}
          children={value}
          style={atomDark}
        />
      );
    },
  };
  return (
    <div>
      <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown renderers={customRenderers}>
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default PostContent;
