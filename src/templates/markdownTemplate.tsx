import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

interface Props {
  readonly data: PageQueryData;
}

export default class MarkdownTemplate extends React.Component<Props> {
  public render() {
    const { data } = this.props;
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (
      <Layout title={frontmatter.title}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    );
  }
}

interface PageQueryData {
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
