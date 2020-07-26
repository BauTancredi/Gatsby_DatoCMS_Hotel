import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const H2 = styled.h2`
  text-align: center;
  font-size: 4rem;
  margin-top: 4rem;
`

const Content = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  p {
    line-height: 2;
    margin-top: 2rem;
  }
`

const ContentUs = () => {
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "us" } }) {
        nodes {
          title
          content
          image {
            fluid(maxWidth: 1200) {
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

      <Content>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </Content>
    </>
  )
}

export default ContentUs
