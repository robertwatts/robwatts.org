import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding-bottom: 36px;
`;

interface Props {
  readonly title?: string;
}

export default class extends React.Component<Props> {
  public render() {
    const {children} = this.props;

    return (
      <>
        <main className="content" role="main">
          {children}
        </main>
        <StyledFooter className="footer">
          © {new Date().getFullYear()},{` `}
          <a href="https://robwatts.org">robwatts.org</a>. Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </StyledFooter>
      </>
    );
  }
}
