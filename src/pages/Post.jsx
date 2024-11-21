import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

const Post = () => {
 
    const { post } = useLoaderData();

    return (
        <div>
            <h1>
                {post.id} - {post.title}
            </h1>
            <p>{post.body}</p>
            <Link to="/">Volver al Home</Link>
        </div>
    );
  
}

export default Post

export const loaderPost = async ({ params }) => {
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    if (!data.ok)
        throw {
            status: data.status,
            statusText: "Id No es valido o no existe ",
        };
    const post = await data.json();
    return { post };
};