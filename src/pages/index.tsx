import React, { ReactNode } from "react"
import { graphql, Link } from "gatsby"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import SEO from "react-seo-component"
import { Layout } from "../components/layout"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

type ImageProps = {
  sizes: {
    tracedSVG: string
    aspectRatio: number
    src: string
    srcSet: string
    sizes: string
  }
}

const Image: React.FC<ImageProps> = ({ sizes }) => {
  return (
    <Img
      css={css`
        ${tw`rounded-lg `}
      `}
      sizes={sizes}
    />
  )
}

type HomePageProps = {
  children?: ReactNode
  data: {
    allMdx: {
      nodes: [
        {
          id: string
          excerpt: string
          frontmatter: {
            title: string
            date: Date
            cover: {
              childImageSharp: {
                sizes: {
                  tracedSVG: string
                  aspectRatio: number
                  src: string
                  srcSet: string
                  sizes: string
                }
              }
            }
          }
          fields: {
            slug: string
          }
        }
      ]
    }
  }
}

const Home: React.FC<HomePageProps> = ({ data }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    author,
  } = useSiteMetadata()

  return (
    <>
      <Layout>
        <SEO
          title={title}
          description={description}
          image={`${siteUrl}${image}`}
          pathname={siteUrl}
          siteLanguage={siteLanguage}
          siteLocale={siteLocale}
          twitterUsername={twitterUsername}
          author={author}
        />
        <main>
          {data.allMdx.nodes.map(({ excerpt, frontmatter, id, fields }) => (
            <div key={id}>
              <Link to={fields.slug}>
                {frontmatter.cover ? (
                  <Image sizes={frontmatter.cover.childImageSharp.sizes} />
                ) : null}
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </div>
          ))}
        </main>
      </Layout>
    </>
  )
}

export default Home

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          cover {
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
