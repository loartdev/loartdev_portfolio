import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername, imageSite } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image}`,
    url: `${siteUrl}/${pathname || ``}`,
    twitterUsername,
    imageSite,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imageSite} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href={seo.image} />
      {children}
    </>
  )
}
