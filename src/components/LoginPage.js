import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiLock2Fill } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let navigate = useNavigate();

  let [position, setPosition] = useState("");

  let currentWidth = document.documentElement.clientWidth;

  useEffect(() => {
    if (currentWidth > 770) {
      setPosition("absolute");
    }
  }, []);

  window.addEventListener("resize", () => {
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth <= 770) {
      setPosition("");
    }

    if (screenWidth > 770) {
      setPosition("absolute");
    }
  });

  let LoginHead = styled("p")`
    font-size: 48px;
    width: 300px;
    border-bottom: 2px solid #2d4059;
  `;

  let Label = styled("span")`
    font-size: 48px;
  `;

  return (
    <div>
      <div className="container" style={{ position: "relative" }}>
        <div
          onClick={() => {
            navigate("/");
          }}
          style={{
            position: position,
            paddingTop: "80px",
            left: "80px",
            cursor: "pointer",
          }}
        >
          <SiCashapp
            style={{ color: "#EA5455", fontSize: "70px", margin: "0 20px" }}
          />
        </div>
        <div className="row">
          <div
            className="col d-flex flex-column justify-content-center align-items-center"
            style={{ paddingTop: "80px" }}
          >
            <LoginHead>Login</LoginHead>
            <p>
              <RiLock2Fill style={{ fontSize: "48px" }} />
            </p>
            <p
              style={{
                display: "flex",
                width: "750px",
                alignItems: "center",
                paddingTop: "80px",
                justifyContent: "space-between",
              }}
            >
              <Label>ID(Email)</Label>
              <input
                type="text"
                placeholder="아이디를 입력하세요"
                style={{
                  width: "400px",
                  height: "50px",
                  marginRight: "165px",
                  fontSize: "20px",
                }}
              />
            </p>
            <p
              style={{
                display: "flex",
                width: "600px",
                alignItems: "center",
                paddingTop: "30px",
                justifyContent: "space-between",
              }}
            >
              <Label>PW</Label>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                style={{
                  width: "400px",
                  height: "50px",
                  marginRight: "90px",
                  fontSize: "20px",
                }}
              />
            </p>
            <p
              style={{
                paddingTop: "60px",
                paddingLeft: "15px",
                display: "flex",
                width: "450px",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#2d4059",
                  border: "none",
                  fontSize: "24px",
                }}
              >
                로그인
              </Button>
              <Button
                onClick={() => {
                  navigate("/account");
                }}
                style={{
                  backgroundColor: "#2d4059",
                  border: "none",
                  fontSize: "24px",
                }}
              >
                회원가입
              </Button>
              <Button
                style={{
                  backgroundColor: "#2d4059",
                  border: "none",
                  fontSize: "24px",
                }}
              >
                계정찾기
              </Button>
              <Button
                onClick={() => {
                  navigate("/");
                }}
                style={{
                  backgroundColor: "#2d4059",
                  border: "none",
                  fontSize: "24px",
                }}
              >
                취소
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
