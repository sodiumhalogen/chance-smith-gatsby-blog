import React from "react";
import { Link, graphql } from "gatsby";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
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
            Chance Smith is a Javascript developer living in Jackson, Tennessee.
          </h1>
          <p>
            Chance makes a living working with{" "}
            <a href="sodiumhalogen.com">Sodium Halogen</a> and{" "}
            <a href="smoothieking.com">Smoothie King</a>, finding efficient
            solutions and creating applications with Javascript.
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
            He's also a 3x 1st place hackathon winner.
          </p>
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

export default BlogIndex;

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
