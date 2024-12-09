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
    {
      title: "HOW TO TELL IF SHORTNESS OF BREATH IS FROM ANXIETY",
      date: "Jul 27, 2024",
      excerpt: "Shortness of breath can be unsettling and has various causes, from physical issues to mental ones. Anxiety is a significant factor, sometimes appearing in subtle yet noticeable ways. Determining if your shortness of breath is from anxiety or something more serious can...",
      slug: "shortness-of-breath-anxiety",
    },
    {
      title: "CAN ADDERALL CAUSE ANXIETY? EVERYTHING YOU NEED TO KNOW",
      date: "Jun 15, 2024",
      excerpt: "Understanding the relationship between Adderall and anxiety...",
      slug: "adderall-anxiety",
    },
    {
      title: "DOES VAPING CAUSE ANXIETY?",
      date: "May 28, 2024",
      excerpt: "As vaping gains popularity, so do concerns about its effects on mental health...",
      slug: "vaping-anxiety",
    }
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