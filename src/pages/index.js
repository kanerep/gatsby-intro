import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

import usePosts from '../hooks/use-posts';
import PostPreview from '../components/PostPreview';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <p>
        Welcome to my personal blog!
        <span role="img" aria-label="emoji-waving-hello">
          👋
        </span>
      </p>
      <Link to="/about/">About me &rarr;</Link>
      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
