import React from 'react';
import Link from 'next/link';
import Image from 'next/image';  
import '../../app/BlogPreviewGrid.css';


const BlogPreviewGrid = () => {
  const blogPosts = [
    {
      title: "HOW TO IMPROVE AT HAVING CONVERSATIONS",
      date: "December 9, 2024",
      excerpt: "I recently came across a viral post in the Social Skills Reddit Community that caught my attention. The poster expressed amazement at how naturally articulate some people are during conversations and when answering questions.",
      slug: "improve-at-having-conversations",
      image: "/Reddit_post_conversation_ability2.png"
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">RECENT BLOG POSTS</h1>
      
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <article className="blog-card">
              <div className="blog-card-content">
                <h2 className="blog-card-title">
                  {post.title}
                </h2>
                <time className="blog-card-date">
                  {post.date}
                </time>
                <div className="blog-card-image">
                  <Image
                    src={post.image || "/blog/placeholder.jpg"}
                    alt={post.title}
                    width={200}
                    height={140}
                    className="blog-image"
                  />
                </div>
                <p className="blog-card-excerpt">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPreviewGrid;