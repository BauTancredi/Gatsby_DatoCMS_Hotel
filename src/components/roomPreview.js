import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

const Container = styled.div`
  border: 1px solid #e1e1e1;
  margin-bottom: 2rem;
`

const RoomPreview = ({ room }) => {
  const { title, content, slug, image } = room

  return (
    <Container>
      <Image fluid={image.fluid} />
      <div
        css={css`
          padding: 3rem;
          text-align: center;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {title}
        </h3>
        <p>{content}</p>

        <Button to={slug}>View room</Button>
      </div>
    </Container>
  )
}

export default RoomPreview
