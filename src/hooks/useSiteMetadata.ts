import { graphql, useStaticQuery } from "gatsby"

export type SiteMetadataProps = {
  title: string
  description: string
  image: string
  siteUrl: string
  siteLanguage: string
  siteLocale: string
  twitterUsername: string
  author: string
}

export const useSiteMetadata = (): SiteMetadataProps => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
            siteLanguage
            siteLocale
            twitterUsername
            author
          }
        }
      }
    `
  )

  return site.siteMetadata
}
