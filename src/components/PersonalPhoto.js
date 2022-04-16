import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "IMG_9476-Edit_square_hq.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            aspectRatio: 1,
            quality: 90,
            placeholder: BLURRED
          )
        }
      }
    }
  `)

  if (!data?.photo?.childImageSharp?.gatsbyImageData) {
    return null
  }

  return <GatsbyImage image={data.photo.childImageSharp.gatsbyImageData} />
}

export default Image
