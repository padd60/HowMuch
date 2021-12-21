import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { SiCashapp } from "react-icons/si";
import styled from "styled-components";
import Banner from "../img/banner.svg";
import ItemCard from "./ItemCard";
import SampleImg from "../img/sample.svg";
import { IoShareSocialSharp } from "react-icons/io5";

const Mainpage = () => {
  let state = useSelector((state) => {
    return state;
  });

  // let currentImageWidth = document.documentElement.clientWidth;

  let [imageWidth, imageWidthChange] = useState("600px");

  let [rowAlign, rowAlignChange] = useState("left");

  window.addEventListener("resize", () => {
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth <= 990) {
      imageWidthChange("450px");
      rowAlignChange("center");
    }

    if (screenWidth > 990) {
      imageWidthChange("600px");
      rowAlignChange("left");
    }
  });

  // console.log(imageWidth);

  let Jumbo = styled("div")`
    background-color: #ffd460;
  `;

  let Line = styled("div")`
    border-bottom: 3px solid #2d4059;
    margin: 150px auto;
  `;

  let GuideText = styled("div")`
    text-align: left;
    padding: 20px 0 20px 60px;
  `;

  let GuideTitle = styled("div")`
    text-align: left;
    font-size: 28px;
    display: flex;
  `;

  let NumberBox = styled("span")`
    border: 3px solid black;
    padding: 0 10px;
    margin-right: 20px;
    height: 45px;
  `;

  let Footer = styled("div")`
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #2d4059;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    color: white;
    text-align: left;
  `;

  return (
    <div>
      {/* navbar */}
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#2D4059" }}>
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

      {/* jumbotron */}
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

      {/* item list */}

      <div className="container-lg" style={{ margin: "80px auto" }}>
        <div
          className="row"
          style={{
            margin: "30px 0",
            fontSize: "32px",
            textAlign: rowAlign,
          }}
        >
          <span>인기 평가물</span>
        </div>
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center">
            <ItemCard />
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <ItemCard />
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <ItemCard />
          </div>
        </div>
      </div>
      <div className="container-lg" style={{ margin: "80px auto" }}>
        <div
          className="row"
          style={{
            margin: "30px 0",
            fontSize: "32px",
            textAlign: rowAlign,
          }}
        >
          <span>새 평가물</span>
        </div>
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center">
            <ItemCard />
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <ItemCard />
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <ItemCard />
          </div>
        </div>
      </div>

      <Line className="container-lg"></Line>

      {/* user guide */}
      <div className="container-lg" style={{ margin: "80px auto" }}>
        <div className="row" style={{ marginBottom: "120px" }}>
          <span style={{ fontSize: "32px" }}>
            우리의 관심사는 당신의 상상력 넘치는{" "}
            <span style={{ color: "#F07B3F" }}>모든 것</span>
          </span>
        </div>
        <div
          className="row d-flex justify-content-around"
          style={{ marginBottom: "150px" }}
        >
          <div className="col-lg-5">
            <GuideTitle>
              <NumberBox>1</NumberBox> 당신의 어떤 것이든 공유해보세요.
            </GuideTitle>
            <GuideText>
              <p>
                상상력 넘치는 아이디어, 웃긴 사진, 자신만의 짤, 유용한 정보글
                혹은 실제 자신의 평가 받고 싶은 물건까지 ... !
              </p>
              <p>전부 포스팅하여 가치를 알아보고 실제 포인트로 받아보세요 !</p>
            </GuideText>
          </div>
          <div className="col-lg-5">
            <img
              src={SampleImg}
              alt="guideImage"
              style={{ width: "100%" }}
            ></img>
          </div>
        </div>

        <div
          className="row d-flex justify-content-around"
          style={{ marginBottom: "150px" }}
        >
          <div className="col-lg-5">
            <GuideTitle>
              <NumberBox>2</NumberBox>
              <span> 다른 유저의 모든 것을 평가해보세요.</span>
            </GuideTitle>
            <GuideText>
              <p>
                자신의 가치만 평가받지 말고 다른 사람의 생각과 물건을 평가하고
                서로의 생각을 공유해보세요!
              </p>
              <p>당신의 평가가 실제 가치가 됩니다.</p>
            </GuideText>
          </div>
          <div className="col-lg-5">
            <img
              src={SampleImg}
              alt="guideImage"
              style={{ width: "100%" }}
            ></img>
          </div>
        </div>

        <div
          className="row d-flex justify-content-around"
          style={{ marginBottom: "150px" }}
        >
          <div className="col-lg-5">
            <GuideTitle>
              <NumberBox>3</NumberBox> 가치를 포인트로 받고 사용해보세요.
            </GuideTitle>
            <GuideText>
              <p>
                평가받은 포인트를 이용해 회원 등급을 올리거나 포인트샵에서
                다양한 상품을 구매할 수 있습니다.
              </p>
            </GuideText>
          </div>
          <div className="col-lg-5">
            <img
              src={SampleImg}
              alt="guideImage"
              style={{ width: "100%" }}
            ></img>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <IoShareSocialSharp
              style={{
                fontSize: "28px",
                marginRight: "20px",
                backgroundColor: "#EA5455",
                padding: "2px",
                borderRadius: "5px",
              }}
            />
            소셜네트워크는 준비중에 있습니다.
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-6" style={{ height: "180px" }}>
            <p>이용약관</p>
            <p>
              1. 해당 경매는 재미를 위한 것으로 실제 경매 거래와는 차이가 있음을
              알립니다.
            </p>
            <p>
              2. 경매된 포인트는 정산 후 익일 지급되며 해당 포인트는 등급,
              포인트 샵등의 사이트 내에서만 이용이 가능합니다. <br />
              (추후 기프티콘 연계등의 확장 계획에 있음)
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-6" style={{ height: "150px" }}>
            <p>
              회사명: howmuch company <br />
              사업자 등록 번호 : 0000-0000-0000 <br />
              주소 : 서울시 oooo oooo xxxx xxxx <br />
              전화번호 : 02-xxx-xxxx
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-6" style={{ height: "20px" }}>
            Copyright©2021 Alright reserved by howmuch
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Mainpage;