import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main>
      <Header />
      <div>This is my Home Page</div>
      <p>
        <Link href={"/about"}>Go to About</Link>
      </p>
      <Link href={"/blog"}>Go to Blog</Link>
      <p></p>
    </main>
  );
};

export default Home;
