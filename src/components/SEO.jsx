import React from "react"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "../hooks/use-site-metadata"


const SEO = ({ title, titleOverwrite=false, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    icon,
    image,
    siteUrl,
    twitterUsername
  } = useSiteMetadata()

  const seo = {
    title: (titleOverwrite && title) || (title ? title + " | " + defaultTitle : defaultTitle),
    description: description || defaultDescription,
    iconPath: icon,
    image,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href={seo.iconPath} type="image/svg" />
      {children}
    </Helmet>
  )
}


export default SEO
