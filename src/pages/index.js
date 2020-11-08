import React from "react"
import { createMuiTheme, ThemeProvider, Container } from "@material-ui/core"
import Nav from "../components/nav"
import Banner from "../components/banner"
import Services from "../components/services"
import About from "../components/about"
import Contact from "../components/contact"
import Forms from "../components/forms"
import Footer from "../components/footer"

import "../styles/index.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00e5bf",
    },
    secondary: {
      main: "#00bbe6",
    },
    type: "dark",
  },
})

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Banner />
      <Container maxWidth="xl">
        <Services />
        <About />
        <Contact />
        <Forms />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default IndexPage
