import React, { ReactNode } from "react"

import { Layout } from "../components/layout"
import { graphql, Link } from "gatsby"

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
  return (
    <>
      <Layout>
        {/* <Dump data={data} /> */}
        <main>
          {data.allMdx.nodes.map(({ excerpt, frontmatter, id, fields }) => (
            <div key={id}>
              <Link to={fields.slug}>
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
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
