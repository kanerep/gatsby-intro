import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      Hi I am Kane and this is my personal blog. I enjoy writing about all
      things technology!
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
