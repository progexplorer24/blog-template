import React, { ReactNode } from "react"
import { graphql, Link } from "gatsby"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import SEO from "react-seo-component"
import { Layout } from "../components/layout-elements/layout"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { H1 } from "../components/page-elements/h1"
import { Dump } from "../components/dump"
import { theme } from "../utils/global-styles"
import { H2 } from "../components/page-elements/h2"
import { H3 } from "../components/page-elements/h3"
import { H4 } from "../components/page-elements/h4"
import { P } from "../components/page-elements/p"
import { Blockquote } from "../components/page-elements/blockquote"
import { MyLink } from "../components/page-elements/my-link"
import { TextHr } from "../components/page-elements/text-hr"
import { InlineCode } from "../components/page-elements/inline-code"
import { Ul } from "../components/page-elements/ul"

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
        <H1>This is first heading</H1>
        <H2>This is second heading</H2>
        <H3>This is third heading</H3>
        <TextHr text="Next Chapter" />
        <H4>This is fourth heading</H4>
        <Ul>
          <li>Train</li>
          <li>Sleep</li>
          <li>Code</li>
          <li>Repeat</li>
        </Ul>
        <P>
          Tailwind uses literal color names (like red, green, etc.) and a
          numeric scale (where 100 is light and 900 is dark) by default.{" "}
          <InlineCode>package.json</InlineCode> This ends up being fairly
          practical for most projects, but there are good reasons to use other
          naming conventions as well.
        </P>
        <P>
          For example, if you&apos;re working on a project that needs to support
          multiple themes, it might make sense to use more abstract names like
          primary and secondary:
        </P>
        <P strong>
          Tailwind uses literal color names (like red, green, etc.) and a
          numeric scale (where 100 is light and 900 is dark) by default. This
          ends up being fairly practical for most projects, but there are good
          reasons to use other naming conventions as well.{" "}
          <MyLink address="/">This is a link</MyLink>
        </P>
        <P em>
          For example, if you&apos;re working on a project that needs to support
          multiple themes, it might make sense to use more abstract names like
          primary and secondary: <MyLink address="/">This is a link</MyLink>
        </P>
        <Blockquote
          author="John Wayne, Quoting and citing with <blockquote>"
          source="http://html5doctor.com/blockquote-q-cite/"
        >
          I don&apos;t know why we are here, but I&apos;m pretty sure that it is
          not in order to enjoy ourselves.
        </Blockquote>
        <MyLink address="/">Yet another link</MyLink>
        <Dump
          defaultConfig={theme}
          css={css`
            ${tw`overflow-x-hidden`}
          `}
        />
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
