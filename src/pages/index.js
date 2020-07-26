import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

import ImageHotel from "../components/imageHotel"
import ContentHome from "../components/contentHome"
import RoomPreview from "../components/roomPreview"

import UseRooms from "../hooks/use-rooms"

const H2 = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-top: 5rem;
`

const ListRooms = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const rooms = UseRooms()

  return (
    <Layout>
      <ImageHotel />
      <ContentHome />

      <H2>Our Rooms</H2>
      <ListRooms>
        {rooms.map(room => (
          <RoomPreview key={room.id} room={room} />
        ))}
      </ListRooms>
    </Layout>
  )
}

export default IndexPage
