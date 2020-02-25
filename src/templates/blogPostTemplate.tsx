import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Layout } from "../components/layout"
// import { Dump } from "../components/dump"

type BlogPostProps = {
  data: {
    mdx: {
      body: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }

  pageContext: {
    previous: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    } | null
    next: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    } | null
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext
  console.log(pageContext)
  console.log(typeof previous)
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {previous === null ? null : (
        <>
          <Link to={previous.fields.slug}>
            <p>{previous.frontmatter.title}</p>
          </Link>
        </>
      )}
      {next === null ? null : (
        <>
          <Link to={next.fields.slug}>
            <p>{next.frontmatter.title}</p>
          </Link>
        </>
      )}
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`
export default BlogPost
