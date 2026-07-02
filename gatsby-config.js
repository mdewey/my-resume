/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteUrl = `https://resume.markdewey.dev`

module.exports = {
  siteMetadata: {
    title: `Mark Dewey's Resume`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        // Explicitly welcome general and AI crawlers to index the resume.
        policy: [
          { userAgent: `*`, allow: `/` },
          { userAgent: `GPTBot`, allow: `/` },
          { userAgent: `ClaudeBot`, allow: `/` },
          { userAgent: `PerplexityBot`, allow: `/` },
          { userAgent: `Google-Extended`, allow: `/` },
        ],
      },
    },
  ],
}
