import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "About Page",
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default About;
