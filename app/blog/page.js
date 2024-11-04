import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div>
      <div>Visit Blogs</div>
      <p>
        <Link href={"/blog/1"}>Post - 1</Link>
      </p>
      <p>
        <Link href={"/blog/2"}>Post - 2</Link>
      </p>
      <p>
        <Link href={"/blog/3"}>Post - 3</Link>
      </p>
      <p>
        <Link href={"/blog/4"}>Post - 4</Link>
      </p>
      <p>
        <Link href={"/blog/5"}>Post - 5</Link>
      </p>
    </div>
  );
};

export default Blog;
