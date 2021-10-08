import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import starBig from '../assets/starBig.png'

const DevicePage = () => {
    const device = {id: 1, name: "Iphone 12", price: 950, rating: 5, img: 'https://static.21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'}
    const description = [
        {id: 1, title: 'Оперативна память', description: '3Гб'},
        {id: 2, title: 'Камера', description: '12Мп'},
        {id: 3, title: 'Процессор', description: 'A10 Byonic'},
        {id: 4, title: 'Кол-во ядер', description: '4'},
        {id: 5, title: 'Аккумулятор', description: '2850 mA'},
    ]
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
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '8px solid lightseagreen'}}
                    >
                        <h3>от ${device.price}</h3>
                        <Button variant={"outline-primary"}>
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-5">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightcyan' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    );

};

export default DevicePage;