import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import starBig from '../assets/starBig.png'

const DevicePage = () => {
    const device = {id: 1, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'}

        return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${starBig}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>

                </Col>
            </Row>

        </Container>
    );
};

export default DevicePage;