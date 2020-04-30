import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>
      Welcome to my personal blog!
      <span role="img" aria-label="emoji-waving-hello">
        👋
      </span>
    </p>
    <Link to="/about/">About me &rarr;</Link>
  </Layout>
);
