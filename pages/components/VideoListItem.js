import { Row, Col } from 'react-bootstrap'
import React from 'react'

const VideoListItem = ({ videoThumbnail, videoName, videoViews = 0 }) => {

    return (
        <Row className="mx-auto py-2 videoListItem">
            <Col sm={5}>
                <div className="videoListItem-Image">
                    <img src={videoThumbnail} alt={videoName} />
                </div>
            </Col>
            <Col sm={7} className="">
                <div className="pt-1">
                    <p className="videoListItem-Text pb-0 mb-0">{videoName}</p>
                    {videoViews >= 10 &&
                        <p>Views: {videoViews}</p>
                    }
                </div>
            </Col>
        </Row>
    )
}

export default VideoListItem