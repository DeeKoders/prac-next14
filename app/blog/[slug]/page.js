import Link from "next/link";
import React from "react";

const BlogPostPage = ({ params }) => {
  return (
    <div>
      <p>{`This is blog post - ${params.slug}`}</p>
      <p>
        <Link href={"/blog"}>Go Back</Link>
      </p>
    </div>
  );
};

export default BlogPostPage;
