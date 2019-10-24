import { graphql } from 'gatsby';
import React from 'react';

import Head from '../components/head';
import Layout from '../components/layout';

interface Props {
  readonly data: PageQueryData;
}

export default class MarkdownTemplate extends React.Component<Props> {
  public render() {
    const content = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle}>
        <Head title={content.frontmatter.title} />
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </Layout>
    );
  }
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string,
    },
  };
  markdownRemark: {
    html: string,
    frontmatter: {
      path: string,
      title: string,
    },
  };
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
