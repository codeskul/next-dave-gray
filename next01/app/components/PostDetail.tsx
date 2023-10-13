import React from "react";

const PostDetail = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-cache",
  });
  const fakePromise = await res.json();
  return <div>{JSON.stringify(fakePromise)}</div>;
};

export default PostDetail;
