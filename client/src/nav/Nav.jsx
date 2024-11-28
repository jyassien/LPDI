import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import LPDILogoShort from "../assets/images/LPDILogoShort.png";
import "./Nav.css";

const Nav = ({ page, setPage }) => {
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Navbar id="Nav" className="header-nav bg-body-tertiary py-2 px-5">
      <Container>
        <Navbar.Brand href="/">
          <img src={LPDILogoShort} alt="" className="brand-img border-round" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end fs-3 fw-bold">
          <NavDropdown title={page} id="collapsible-nav-dropdown">
            {page !== "Live Scan" && (
              <NavDropdown.Item
                onClick={() => handlePageChange("Live Scan")}
                className="primary-text fs-3 fw-bold"
              >
                Live Scan
              </NavDropdown.Item>
            )}
            {page !== "Saved Scans" && (
              <NavDropdown.Item
                onClick={() => handlePageChange("Saved Scans")}
                className="primary-text fs-3 fw-bold"
              >
                Saved Scans
              </NavDropdown.Item>
            )}
            {page !== "Profile" && (
              <NavDropdown.Item
                onClick={() => handlePageChange("Profile")}
                className="primary-text fs-3 fw-bold"
              >
                Profile
              </NavDropdown.Item>
            )}
            {page !== "About LPDI" && (
              <NavDropdown.Item
                onClick={() => handlePageChange("About LPDI")}
                className="primary-text fs-3 fw-bold"
              >
                About LPDI
              </NavDropdown.Item>
            )}
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
