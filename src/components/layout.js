import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm, scale } from "../utils/typography";

// #region Styled Components
const NavLink = styled(Link)`
  margin: 1.2rem 0.5rem 0.4rem;
  box-shadow: ${props => (props.isActive ? null : "none")};
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  &:hover {
    box-shadow: 0 1px 0 0 currentColor;
  }
`;
// #endregion

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const isRootPath = location.pathname === `${__PATH_PREFIX__}/`;
    const isBlogPath = location.pathname === `${__PATH_PREFIX__}/blog`;
    let header;

    if (isRootPath) {
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
        </div>
      );
    } else if (isBlogPath) {
      header = (
        <>
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
          <h1
            style={{
              ...scale(1.4),
              fontFamily: `Montserrat, sans-serif`,
              // fontFamily: `Major Mono Display, monospace`,
              // textTransform: "uppercase",
              marginTop: "0px"
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
          </h1>
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
          padding: `${rhythm(0.4)} ${rhythm(3 / 4)} ${rhythm(1.5)}`
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
            <NavLink to={`/blog`} isActive={isBlogPath}>
              Blog
            </NavLink>
            <NavLink to={`/`} isActive={isRootPath}>
              Front
            </NavLink>
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
