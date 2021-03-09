import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 90, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  if (!data?.photo?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.photo.childImageSharp.fluid} />
}

export default Image
