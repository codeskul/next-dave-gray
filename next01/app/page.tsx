import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/about">Go to About</Link>
      <Link href="/users">Go to Users</Link>
    </>
  );
};

export default Home;
