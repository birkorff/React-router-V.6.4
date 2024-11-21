import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const { posts } = useLoaderData();
  console.log(posts);

  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((posts) => (
          <li key={posts.id}>
            <Link to={`/blog/${posts.id}`}>{posts.title}</Link>
          </li>
        ))
      ) : (
        <li>No blogs found</li>
      )}
    </ul>
  )};

export default Blog;

export const loaderBlogs = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  if (!data.ok)
    throw {
        status: data.status,
        statusText: "Id No es valido o no existe ",
    };
  return { posts };
};
