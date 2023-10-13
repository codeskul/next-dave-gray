import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>About Navbar</nav>
      <main className="min-h-screen grid place-content-center bg-gray-400">
        {children}
      </main>
    </>
  );
};

export default AboutLayout;
