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

const IndexPage = () => {
  const rooms = UseRooms()

  return (
    <Layout>
      <ImageHotel />
      <ContentHome />

      <H2>Our Rooms</H2>
      <ul>
        {rooms.map(room => (
          <RoomPreview key={room.id} room={room} />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
