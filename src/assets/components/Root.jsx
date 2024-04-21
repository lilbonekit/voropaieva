import { Outlet } from "react-router-dom"
import { Container } from '@chakra-ui/react'
import SideMenu from "./SideMenu"

const Root = () => {
  return (
    <>
      <SideMenu/>
      <Container maxW='6xl'>
        <Outlet/>
      </Container>
    </>
  )
}

export default Root
