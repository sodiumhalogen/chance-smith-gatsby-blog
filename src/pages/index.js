import React from "react";
import { Link, graphql } from "gatsby";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class Homepage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div>
          <h1
            style={{
              marginTop: "0"
            }}
          >
            Chance is a Javascript developer living in Jackson, Tennessee.
          </h1>
          <p>
            Chance makes a living working with{" "}
            <a href="sodiumhalogen.com">Sodium Halogen</a> and{" "}
            <a href="smoothieking.com">Smoothie King</a>, finding efficient
            solutions and creating applications with Javascript.
          </p>
          <p>
            <strong>At home</strong> he helps his wife (Molly) with there three
            boys (under 6). They enjoy dinner together, books, driveway bike
            rides 😆, hammocks, swimming, night walks, and movie nights.
          </p>
          <p>
            <strong>Is minimalistic</strong> with his workspace, todo list, and
            creative solutions.
          </p>
          <p>
            <strong>Small Businesses</strong> hire him when they are looking to
            build a scalable app that solves a problem for their team and/or
            customer.
          </p>
          <p>
            <strong>Chance has worked with</strong> prostigious and innovative
            companies like: Chick-fil-a, Vanderbuilt University, and Popvox.
            He's also a 4x 1st place hackathon winner.
          </p>
          <hr />
          <h2
            style={{
              marginBottom: "-28px"
            }}
          >
            Latest Post
          </h2>
          {[...posts[0]].map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4)
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
