import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Nav from "./nav"

const LinkHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Foot = styled.footer`
  background-color: rgba(44, 62, 80);
  margin-top: 5rem;
  padding: 1rem;
`
const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const RightsReserved = styled.p`
  text-align: center;
  color: #fff;
  background-color: rgb(33, 44, 55);
  margin: 0;
  padding: 1rem;
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <Foot>
        <FooterContainer>
          <Nav />
          <LinkHome to="/">
            <h1>Gastby Hotel</h1>
          </LinkHome>
        </FooterContainer>
      </Foot>
      <RightsReserved>
        Gatsby Hotel. All rights reserved {year} &copy;
      </RightsReserved>
    </>
  )
}

export default Footer
