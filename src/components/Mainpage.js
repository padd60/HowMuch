import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { SiCashapp } from "react-icons/si";
import styled from "styled-components";
import Banner from "../img/banner.svg";
import ItemCard from "./ItemCard";

const Mainpage = () => {
  let state = useSelector((state) => {
    return state;
  });

  // let currentImageWidth = document.documentElement.clientWidth;

  let [imageWidth, imageWidthChange] = useState("600px");

  window.addEventListener("resize", () => {
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth <= 990) {
      imageWidthChange("450px");
    }

    if (screenWidth > 990) {
      imageWidthChange("600px");
    }
  });

  console.log(imageWidth);

  let Jumbo = styled("div")`
    background-color: #ffd460;
  `;

  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ backgroundColor: "#2D4059" }}
      >
        <Container style={{ maxWidth: "1400px" }}>
          <div className="d-flex align-items-center">
            <SiCashapp
              style={{ color: "#EA5455", fontSize: "70px", margin: "0 20px" }}
            />
            <Navbar.Brand
              href="#home"
              style={{
                color: "white",
                fontSize: "50px",
                paddingTop: "15px",
                fontWeight: "bold",
              }}
            >
              How Much ?
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="fixnav basic-navbar-nav">
            <Nav
              className="d-flex justify-content-around"
              style={{ width: "400px" }}
            >
              <Nav.Link
                href="#home"
                style={{ color: "white", fontSize: "24px" }}
              >
                로그인
              </Nav.Link>
              <Nav.Link
                href="#features"
                style={{ color: "white", fontSize: "24px" }}
              >
                회원가입
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                style={{ color: "white", fontSize: "24px" }}
              >
                마이 포인트
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbo>
        <div
          style={{
            position: "relative",
            paddingTop: "100px",
            paddingBottom: "150px",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              position: "absolute",
              top: "50px",
              left: "50px",
            }}
          >
            당신이 가진 어떤 것도{" "}
            <span style={{ borderBottom: "2px solid #EA5455" }}>
              재미있는 가치
            </span>
            가 된다 !
          </p>
          <img src={Banner} alt="banner" style={{ width: imageWidth }} />
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50px",
              textAlign: "left",
            }}
          >
            <p style={{ fontSize: "24px" }}>
              모든 컨텐츠는 결국 <span style={{ color: "#EA5455" }}>사람</span>
              이니까,
            </p>
            <p style={{ fontSize: "24px" }}>
              당신만의 무언가에{" "}
              <span style={{ borderBottom: "2px solid #EA5455" }}>
                가치를 매겨보세요 !
              </span>
            </p>
            <Button style={{ backgroundColor: "#EA5455", border: "none" }}>
              시작하기
            </Button>
          </div>
        </div>
      </Jumbo>
      <div className="container-lg" style={{ margin: "80px auto" }}>
        <div className="row" style={{ margin: "30px 0", fontSize: "32px" }}>
          인기 평가물
        </div>
        <div className="row">
          <div className="col-lg-4">
            <ItemCard />
          </div>
          <div className="col-lg-4">
            <ItemCard />
          </div>
          <div className="col-lg-4">
            <ItemCard />
          </div>
        </div>
      </div>
      <div className="container-lg" style={{ margin: "80px auto" }}>
        <div className="row" style={{ margin: "30px 0", fontSize: "32px" }}>
          새 평가물
        </div>
        <div className="row">
          <div className="col-lg-4">
            <ItemCard />
          </div>
          <div className="col-lg-4">
            <ItemCard />
          </div>
          <div className="col-lg-4">
            <ItemCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
