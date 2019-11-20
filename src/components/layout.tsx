import React from 'react';

import Nav from './nav';

import { GlobalStyle, styled } from '../styles/theme';

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
        <Nav />

        <header className="header">
          <h1>{this.props.pageTitle}</h1>
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
