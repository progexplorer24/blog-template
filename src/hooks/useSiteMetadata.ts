import { graphql, useStaticQuery } from "gatsby"

type siteMetadataProps = {
  title: string
  description: string
}

export const useSiteMetadata = (): siteMetadataProps => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return site.siteMetadata
}
