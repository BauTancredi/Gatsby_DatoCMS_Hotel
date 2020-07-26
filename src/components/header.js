import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Nav from "./nav"

const LinkHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

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
        <LinkHome to="/">
          <h1>Gastby Hotel</h1>
        </LinkHome>

        <Nav />
      </HeaderContainer>
    </Head>
  )
}

export default Header
