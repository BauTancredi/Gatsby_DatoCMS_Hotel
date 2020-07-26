import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const H2 = styled.h2`
  text-align: center;
  font-size: 4rem;
  margin-top: 4rem;
`

const TextHome = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  p {
    line-height: 2;
  }
`

const ContentHome = () => {
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "home" } }) {
        nodes {
          title
          content
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  //   console.log(info.allDatoCmsPage.nodes[0])
  const { title, content, image } = info.allDatoCmsPage.nodes[0]
  return (
    <>
      <H2>{title}</H2>

      <TextHome>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </TextHome>
    </>
  )
}

export default ContentHome
