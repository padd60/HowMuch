import React from "react";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Account = () => {
  let TopTitle = styled("p")`
    font-size: 48px;
    padding-bottom: 50px;
  `;

  let Head = styled("p")`
    font-size: 32px;
    width: 300px;
    border-bottom: 2px solid #2d4059;
  `;

  let Label = styled("span")`
    font-size: 48px;
  `;

  return (
    <div>
      <div className="container" style={{ position: "relative" }}>
        {/* logo */}
        <div style={{ position: "absolute", top: "80px", left: "80px" }}>
          <SiCashapp
            style={{ color: "#EA5455", fontSize: "70px", margin: "0 20px" }}
          />
        </div>
        {/* end logo */}

        <div className="row">
          <div
            className="col d-flex flex-column justify-content-center align-items-center"
            style={{ paddingTop: "80px" }}
          >
            <TopTitle>
              Join us
              <br />&<br />
              Make your Value !!
            </TopTitle>
            <Head>Create Account</Head>
            <p>
              <RiAccountPinBoxFill style={{ fontSize: "48px" }} />
            </p>
            <p
              style={{
                display: "flex",
                width: "750px",
                alignItems: "center",
                paddingTop: "30px",
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
                display: "flex",
                width: "650px",
                alignItems: "center",
                paddingTop: "30px",
                justifyContent: "space-between",
              }}
            >
              <Label>닉네임</Label>
              <input
                type="text"
                placeholder="닉네임을 입력하세요"
                style={{
                  width: "400px",
                  height: "50px",
                  marginRight: "115px",
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
                paddingBottom: "50px",
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
