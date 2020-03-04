import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "react-seo-component"
import React from "react"
import { Layout } from "../components/layout-elements/layout"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

type BlogPostProps = {
  data: {
    mdx: {
      body: string
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
        date: string
        cover: {
          publicURL: string
        }
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
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    author,
  } = useSiteMetadata()
  const { frontmatter, body, fields, excerpt } = data.mdx
  const { title, date, cover } = frontmatter
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={author}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <h1>{title}</h1>
      <p>{date}</p>
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
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
        }
      }
    }
  }
`
export default BlogPost
