import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "./layout"

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  width: 95%l;
`

const H1 = styled.h1`
  text-align: center;
  margin-top: 4rem;
`

export const query = graphql`
  query($slug: String!) {
    allDatoCmsBedroom(filter: { slug: { eq: $slug } }) {
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
`

const RoomTemplate = ({
  data: {
    allDatoCmsBedroom: { nodes },
  },
}) => {
  const { title, content, image } = nodes[0]

  return (
    <Layout>
      <Main>
        <H1>{title}</H1>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </Main>
    </Layout>
  )
}

export default RoomTemplate
