import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

// #region Styled Components
const MenuIcon = styled.div`
  display: block;
  width: 28px;
  height: 30px;
  margin: 30px auto 0 0;
  & span:after,
  & span:before {
    content: "";
    position: absolute;
    left: 0;
    top: -9px;
  }
  & span:after {
    top: 9px;
  }
  & span {
    position: relative;
    display: block;
  }

  & span,
  & span:after,
  & span:before {
    width: 100%;
    height: 5px;
    background-color: #888;
    transition: all 0.3s;
    backface-visibility: hidden;
    border-radius: 2px;
  }

  /* on activation */
  & span {
    background-color: ${props => props.isMenuOpen && "transparent"};
  }
  & span:before {
    transform: ${props =>
      props.isMenuOpen && "rotate(45deg) translate(5px, 5px)"};
  }
  & span:after {
    transform: ${props =>
      props.isMenuOpen && "rotate(-45deg) translate(7px, -8px)"};
  }
`;
const StyledButtonLink = styled(Link)`
  border: 2px solid #0979cc;
  background: #0979cc;
  padding: 0.4rem 0.5rem;
  margin: 8px;
  color: white;
  &:hover {
    background: white;
    color: #0979cc;
  }
`;
const StyledButton = styled.a`
  margin: 8px;
  border: 2px solid #0979cc;
  background: #0979cc;
  padding: 0.4rem 0.5rem;
  color: white;
  &:hover {
    background: white;
    color: #0979cc;
  }
`;
// #endregion

class Layout extends React.Component {
  state = {
    isMenuOpen: false
  };
  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const blogPath = `${__PATH_PREFIX__}/blog`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            marginBottom: "0"
          }}
        >
          <span>
            <img
              src="/chancesmith_s.jpg"
              alt="chance smith"
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%"
              }}
            />
          </span>
          {/* <h1
            style={{
              ...scale(1.4),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              fontFamily: `Major Mono Display, monospace`,
              textTransform: "uppercase"
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1> */}
        </div>
      );
    } else if (location.pathname === blogPath) {
      header = (
        <>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              // fontFamily: `Major Mono Display, monospace`,
              // textTransform: "uppercase",
              marginTop: "20px"
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        </>
      );
    } else {
      header = (
        <div
          style={{
            display: `flex`,
            marginTop: "12px"
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            <span>
              <StaticQuery
                query={authorPhoto}
                render={data => (
                  <Image
                    fixed={data.avatar.childImageSharp.fixed}
                    alt="chance smith"
                    style={{
                      marginRight: rhythm(1 / 2),
                      marginBottom: 0,
                      minWidth: 50,
                      borderRadius: `100%`
                    }}
                    imgStyle={{
                      borderRadius: `50%`
                    }}
                  />
                )}
              />
            </span>
          </Link>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              // fontFamily: `Major Mono Display, monospace`,
              // textTransform: "uppercase",
              marginTop: "12px"
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        </div>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(21),
          padding: `${rhythm(0.3)} ${rhythm(3 / 4)} ${rhythm(1.5)}`
        }}
      >
        <div
          style={{
            position: "relative"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              position: "absolute",
              right: 0
            }}
          >
            <div onClick={this.toggleMenu}>
              <MenuIcon isMenuOpen={this.state.isMenuOpen}>
                <span />
              </MenuIcon>
            </div>
            <>
              {this.state.isMenuOpen && (
                <>
                  <StyledButton
                    href="http://twitter.com/chance_smith"
                    class="button"
                  >
                    Contact
                  </StyledButton>
                  <StyledButtonLink to={`/blog`}>Blog</StyledButtonLink>
                </>
              )}
            </>
          </div>
        </div>
        <header>{header}</header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Chance Smith</footer>
      </div>
    );
  }
}

export default Layout;

const authorPhoto = graphql`
  query AuthorPhotoQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
