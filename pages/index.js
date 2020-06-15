import Navigation from './layouts/Navigation'
import { Container } from 'react-bootstrap'
import Homepage from './layouts/Homepage'

import React from 'react'

const Index = () => (
  <>
    <Navigation />
    <Container>
      <Homepage />
    </Container>
  </>
)

export default Index
