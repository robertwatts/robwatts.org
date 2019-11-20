
import { Link } from 'gatsby';
import React from 'react';
import { styled, theme } from '../styles/theme';

export default class extends React.Component {
  public render() {
    return (
      <nav>
        <NavLinks>
          <li>
            <Link className="primary" to={`/`}>-rw-</Link>
          </li>
          <li>
            <Link to={`/experience`}>Experience</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contact</Link>
          </li>
        </NavLinks>
      </nav>
    );
  }
}

const NavLinks = styled.ul`
  list-style-type: none;
  margin-left: 0rem;
  margin-top: 2rem;

  & li {
    display: inline-block;
    margin-right: 1rem;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: ${theme.colors.grey}
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.black};
      border-bottom: 1px solid ${theme.colors.green};
    }

    &:active {
      border-bottom: 1px solid ${theme.colors.black};
    }
  }
`;
