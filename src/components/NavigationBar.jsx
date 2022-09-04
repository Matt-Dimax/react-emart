import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faShoppingCart,
	faHeart,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


export default function NavigationBar() {
    return <Navbar bg="light" expand="lg" className="bg-white py-4 fixed-top">
        <Container>
        <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center justify-content-between order-lg-0"
        >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs055yivZN4dfPP9jh9UmjZIx18bysfdrmRZ8vC2ebaON8ddVtMG_QiaSNwC8sooS-Ar4&usqp=CAU" alt="Site Icon" />
            <span id="brand-name">+ULTRA</span>
        </NavLink>

        <div className="nav-btns order-lg-2">
            <button className="btn position-relative" type="button">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span
                className="badge position-absolute top-0 bg-primary translate-middle start-100"
                >5</span>
            </button>
            <button className="btn position-relative" type="button">
            <FontAwesomeIcon icon={faHeart} />
            <span
                className="badge position-absolute top-0 bg-primary translate-middle start-100"
                >2</span>
            </button>
            <button className="btn" type="button">
            <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
        <Navbar.Toggle className="border-0">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <NavbarCollapse className="order-lg-1">
            <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
                <a href="#home" className="nav-link text-dark">Home</a>
            </li>
            <li className="nav-item px-2 py-2">
                <a href="#collections" className="nav-link text-dark">Collection</a>
            </li>
            <li className="nav-item px-2 py-2">
                <a href="#specials" className="nav-link text-dark">Specials</a>
            </li>
            <li className="nav-item px-2 py-2">
                <a href="#blogs" className="nav-link text-dark">Blogs</a>
            </li>
            <li className="nav-item px-2 py-2">
                <a href="#about" className="nav-link text-dark">About Us</a>
            </li>
            <li className="nav-item px-2 py-2">
                <a href="#popular" className="nav-link text-dark">Popular</a>
            </li>
            </ul>
        </NavbarCollapse>
        </Container>
    </Navbar> ;
}