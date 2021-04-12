import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsPath = path.join(process.cwd(), "database");

const getPostsData = (fileName) => {
  const filePath = path.join(postsPath, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent); // Returns an object with 2 properties, data as js object, and content; the markdown text as a string
  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension (.md)
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsPath);

  const allPosts = postFiles.map((postFile) => {
    return getPostsData(postFile);
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
