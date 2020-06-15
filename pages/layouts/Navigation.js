import Head from 'next/head'
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
import React, { Component } from 'react'

const Navigation = () => {
  return (
    <div>
      <Head>
        <title>LA1TV Layout Testing</title>
      </Head>

      <Navbar collapseOnSelect expand="lg" className="navBar">
        <Container>
          <Navbar.Brand href="/"><img src="/WebsiteBannerLogo.png" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link href="/">Shows</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Playlists</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success" className="mx-auto">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
