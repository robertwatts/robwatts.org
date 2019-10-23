'use strict'

module.exports = {
  siteMetadata: {
    title: 'Rob Watts',
    siteUrl: 'https://robwatts.org',
    social: {
      twitter: 'https://twitter.com/rwatts_',
      github: 'https://github.com/robertwatts',
      linkedIn: 'https://www.linkedin.com/in/robertjoelwatts/',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages`
      }
    },
    'gatsby-transformer-remark'
  ],
}
