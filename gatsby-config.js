module.exports = {
  siteMetadata: {
    title: 'Frontend Masters Gatsby Workshop',
    description:
      'A workshop by Jason Lengstorf to teach the basics of Gatsby 🚀',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayout: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
