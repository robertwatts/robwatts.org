import { Link } from 'gatsby';
import React from 'react';

import { GlobalStyle, styled } from '../styles/theme';

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 16px;

    a {
      background: none;
    }
  }
`;

interface Props {
  readonly siteTitle: string;
  readonly pageTitle: string;
}

export default class extends React.Component<Props> {
  public render() {
    const { children } = this.props;

    return (
      <>
        <GlobalStyle />
        <StyledNav className="navigation">
          <ul>
            <li>
              <Link to={`/`}>&</Link>
            </li>
            <li>
              <Link to={`/tags`}>Tags</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
          </ul>
        </StyledNav>

        <header className="header">
          <h1>{this.props.siteTitle} - {this.props.pageTitle}</h1>
        </header>

        <main className="content" role="main">
          {children}
        </main>

        <footer className="footer">
          © {new Date().getFullYear()},{` `}
          <a href="https://robwatts.org">robwatts.org</a>. Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    );
  }
}
