import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "database");

export const getPostsFiles = () => fs.readdirSync(postsPath);

export const getPostData = (postId) => {
  const postSlug = postId.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsPath, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
