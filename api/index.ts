import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import type { Items } from "./types";

const postsDirectory = join(process.cwd(), "posts");

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, "");

  const fullPath = join(postsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
};
