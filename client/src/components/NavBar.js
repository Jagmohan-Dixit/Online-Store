import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)

    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{color: 'red'}} to={SHOP_ROUTE}>StudyТехноПлюс</NavLink>
            {user.isAuth ?
                <Nav className="m-lg-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"}>Админ панель</Button>
                    <Button variant={"outline-light"} className="m-lg-4">Выйти</Button>
                </Nav>
                :
                <Nav className="m-lg-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
        </Navbar>
    );
});

export default NavBar;