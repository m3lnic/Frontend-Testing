import { Row, Col } from 'react-bootstrap'
import React from 'react'

import MostPopular from '../components/MostPopular'

const Homepage = () => {
  return (
    <>
      <Row className="m-2">
        <Col>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://embed.la1tv.co.uk/217/922" />
          </div>
        </Col>
      </Row>
      <Row>
        <MostPopular />
        <Col md={6}>
          <div className="shadow m-4">
            <Row className="mx-auto text-center border-bottom full-width">
              <h2 className="mx-auto text-center">Most Recent</h2>
            </Row>
            <Row>
              <Col md={6}>
                <div className="image">
                  <img src="/tempImage.jpg" alt="" />
                </div>
              </Col>
              <Col md={6}>
                <div className="image">
                  <img src="/tempImage.jpg" alt="" />
                </div>
              </Col>
              <Col md={6}>
                <div className="image">
                  <img src="/tempImage.jpg" alt="" />
                </div>
              </Col>
              <Col md={6}>
                <div className="image">
                  <img src="/tempImage.jpg" alt="" />
                </div>
              </Col>
              <Col md={6}>
                <div className="image">
                  <img src="/tempImage.jpg" alt="" />
                </div>
              </Col>
              <Col md={6}>
                <div className="image">
                  <img src="/tempImage.jpg" alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Homepage
