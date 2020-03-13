import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "react-seo-component"
import React from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import { Layout } from "../components/layout-elements/layout"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { Small } from "../components/page-elements"

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
          childImageSharp: {
            sizes: {
              tracedSVG: string
              aspectRatio: number
              src: string
              srcSet: string
              sizes: string
            }
          }
        } | null
        coverCredit?: string
        coverAlt?: string
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

type ImgProps = {
  source: string
  alt: string
  sizes: string
  credit?: string
}

const Img: React.FC<ImgProps> = ({ source, alt, credit, sizes }) => (
  <figure>
    <img
      src={source}
      alt={alt}
      sizes={sizes}
      css={css`
        ${tw`rounded-lg`}
      `}
    />
    {typeof credit === "undefined" ? null : (
      <figcaption>
        <Small>{credit}</Small>
      </figcaption>
    )}
  </figure>
)

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
  const { title, date, cover, coverCredit, coverAlt } = frontmatter
  const { previous, next } = pageContext

  console.log(frontmatter, coverCredit)

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
      {cover === null ? null : (
        <Img
          source={cover.publicURL}
          alt={coverAlt ? coverAlt : "cover image"}
          sizes={cover.childImageSharp.sizes.sizes}
          credit={frontmatter.coverCredit}
        />
      )}
      <MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer>
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
        coverCredit
        coverAlt
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default BlogPost
