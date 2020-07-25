import React from "react"
import styled from "@emotion/styled"

import Nav from "./nav"

const Head = styled.header`
  background-color: #222;
  padding: 1rem;
`
const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const H1 = styled.h1`
  color: #fff;
  text-align: center;
`

const Header = () => {
  return (
    <Head>
      <HeaderContainer>
        <H1>Gastby Hotel</H1>

        <Nav />
      </HeaderContainer>
    </Head>
  )
}

export default Header
