import React from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите password"
                    />
                    <Row>
                        <Col className="d-flex justify-content-between mt-3 ps-3 pe-3">
                        {isLogin ?
                            <div>
                                Хотите аккаунт? <NavLink to={REGISTRATION_ROUTE}>Ходь сюды!</NavLink>
                            </div>
                            :
                            <div>
                                Аккаунт есть??? <NavLink to={LOGIN_ROUTE}>Тады сюды!</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-danger"}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;