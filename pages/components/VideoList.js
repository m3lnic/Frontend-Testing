import { Row, Col } from 'react-bootstrap'
import React from 'react'

import VideoListItem from './VideoListItem'

const VideoList = ({ heading, data = [], maxItems = 5, errorMessage = "None available! Please check back later!" }) => {
    const isThereData = data.length > 0 ? true : false

    return (
        <Col md={6}>
            <div className="shadow m-4">
                <Row className="mx-auto text-center border-bottom full-width">
                    <h2 className="mx-auto pt-2 text-center">{heading}</h2>
                </Row>
                {isThereData ?
                    data.slice(0, maxItems).map(({ thumbnail, name, views }) => {
                        return <VideoListItem videoThumbnail={thumbnail} videoName={name} videoViews={views} />
                    }) : <p className="text-center">{errorMessage}</p>
                }
            </div>
        </Col>
    )
}

export default VideoList