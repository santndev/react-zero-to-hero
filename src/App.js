import "./App.css";
import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import NotFound from "./pages/NotFound";
import {Container, Nav, Navbar} from "react-bootstrap";
import {main} from "./routes";
import {Main} from "./layouts/Main";

const Navigation = () => {
    const {pathname} = useLocation();
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                main.map((item, key) => {
                                    console.log({pathname});
                                    return <Nav.Link key={key} href={item.path}
                                                     className={(pathname) => {
                                                         const a = pathname == item.path ? "active" : "";
                                                         console.log(a);
                                                         return a;
                                                     }}
                                    >{item.label}</Nav.Link>;
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

function App() {
    console.log(main);
    return (
        <div className='App'>
            <Navigation>
            </Navigation>
            <Routes>
                <Route element={<Main/>}>
                    {main.map((item, key) => (<Route key={key} path={item.path} element={item.component}/>))}
                </Route>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;

