import { graphql } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';

interface Props {
  readonly data: PageQueryData;
}

export default class Index extends React.Component<Props> {
  public render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle}>
        <b>yah</b>
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
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
