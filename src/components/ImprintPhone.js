import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "phone_num.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  if (!data?.photo?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img fixed={data.photo.childImageSharp.fixed} />
}

export default Image
