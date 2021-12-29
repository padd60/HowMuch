import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SiCashapp } from "react-icons/si";
import styled from "styled-components";
import { Button, Card } from "react-bootstrap";
import noImage from "../img/noImage.svg";
import { BsFillCaretRightFill, BsPinFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { FaDollarSign } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import ReplyPagination from "./ReplyPagination";
import BoardListPagination from "./BoardListPagination";

const DetailBoard = (props) => {
  let navigate = useNavigate();

  let { bno } = useParams();
  console.log(bno);

  let state = useSelector((state) => {
    return state;
  });

  let boardState = state.boardReducer;

  console.log(boardState[bno - 1]);

  let item = boardState[bno - 1];

  let tags = item.tag;

  let tagsArray = tags.split(",");
  console.log(tagsArray);

  let [valueLog, SetValueLog] = useState("");

  let testArray = [
    {
      name: "user01",
      price: "3000",
      vdate: "2021/02/30",
    },
    {
      name: "user02",
      price: "6000",
      vdate: "2021/02/27",
    },
    {
      name: "user03",
      price: "30000",
      vdate: "2021/02/26",
    },
    {
      name: "user04",
      price: "7800",
      vdate: "2021/02/25",
    },
    {
      name: "user01",
      price: "67000",
      vdate: "2021/02/24",
    },
    {
      name: "user01",
      price: "100000",
      vdate: "2021/02/23",
    },
    {
      name: "user01",
      price: "5000",
      vdate: "2021/02/22",
    },
    {
      name: "user01",
      price: "99999",
      vdate: "2021/02/21",
    },
  ];

  // resize screen

  let currentWidth = document.documentElement.clientWidth;

  let [flexdir, Setflexdir] = useState("row wrap");

  useEffect(() => {
    if (currentWidth > 990) {
      Setflexdir("row wrap");
    }
    if (currentWidth <= 990) {
      Setflexdir("column wrap");
    }
  }, [flexdir, currentWidth]);

  window.addEventListener("resize", () => {
    let screenWidth = document.documentElement.clientWidth;

    if (screenWidth <= 990) {
      Setflexdir("column wrap");
    }

    if (screenWidth > 990) {
      Setflexdir("row wrap");
    }
  });

  ///end resize screen

  // styled component
  let TopTitle = styled("p")`
    font-size: 48px;
  `;

  let Line = styled("div")`
    width: 80%;
    height: 5px;
    background-color: #2d4059;
    margin: 0 auto;
  `;
  // end styled component
  return (
    <div>
      <div className="cotainer-lg">
        <div
          className="row d-flex justify-content-center"
          style={{ width: "100%", paddingTop: "50px" }}
        >
          <div
            className="col-lg-1"
            onClick={() => {
              navigate("/");
            }}
            style={{ marginBottom: "20px", cursor: "pointer" }}
          >
            <SiCashapp
              style={{ color: "#EA5455", fontSize: "70px", margin: "0 20px" }}
            />
          </div>
          <div className="col-lg-9">
            <TopTitle>Wait you feed back !!</TopTitle>
          </div>
        </div>
      </div>
      <Line></Line>
      <div className="container-lg" style={{ marginTop: "30px" }}>
        <div className="row d-flex justify-content-end">
          <div
            className="col-3 d-flex justify-content-evenly"
            style={{ flexFlow: flexdir }}
          >
            <Button
              style={{ marginBottom: "10px" }}
              onClick={() => {
                navigate("/boardmain/");
              }}
            >
              글목록
            </Button>
            <Button
              style={{ marginBottom: "10px" }}
              onClick={() => {
                navigate("/modify/" + item.bno);
                console.log(item);
              }}
            >
              글수정
            </Button>
            <Button style={{ marginBottom: "10px" }}>글삭제</Button>
          </div>
        </div>
      </div>
      {/* detail card */}
      <div
        className="container-lg d-flex justify-content-center"
        style={{ marginTop: "50px" }}
      >
        <Card style={{ width: "800px", color: "white", padding: "10px" }}>
          <Card.Img
            variant="top"
            src={noImage}
            style={{ border: "2px solid #2D4059" }}
          />
          <Card.Body style={{ padding: "1rem 0" }}>
            <div style={{ display: "flex" }}>
              <Card.Title
                style={{
                  MaxWidth: "700px",
                  height: "40px",
                  textAlign: "left",
                  backgroundColor: "#2D4059",
                  borderRadius: "5px",
                  padding: "10px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.title}
              </Card.Title>
            </div>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  maxWidth: "700px",
                  height: "40px",
                  backgroundColor: "#2D4059",
                  borderRadius: "5px",
                  padding: "10px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.writer}
              </p>
            </div>

            <Card.Text
              style={{
                backgroundColor: "#2D4059",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              {item.content}
            </Card.Text>
            <div style={{ marginTop: "30px", textAlign: "center" }}>
              {tagsArray.map((item, index) => {
                return (
                  <span
                    style={{
                      display: "inline-block",
                      maxWidth: "700px",
                      height: "40px",
                      backgroundColor: "#2D4059",
                      borderRadius: "5px",
                      padding: "10px",
                      marginBottom: "0",
                      marginRight: "10px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                    key={index}
                  >
                    #{item}
                  </span>
                );
              })}
            </div>
          </Card.Body>
        </Card>
      </div>
      {/* end detail card */}

      {/* start price */}
      <div className="container-lg">
        <div className="row">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "150px",
            }}
          >
            <p
              style={{
                width: "100px",
                height: "50px",
                backgroundColor: "#F07B3F",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "17px",
                fontSize: "24px",
              }}
            >
              제시가
            </p>
            <BsFillCaretRightFill
              style={{ color: "#2D4059", fontSize: "32px" }}
            />
            <div
              style={{
                color: "black",
                width: "400px",
                fontSize: "24px",
                borderBottom: "2px solid #2D4059",
              }}
            >
              {item.suggestion ? item.suggestion + " 원" : "없음"}
            </div>
          </div>
        </div>
        <div className="row">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <p
              style={{
                width: "100px",
                height: "50px",
                backgroundColor: "#FFD460",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "17px",
                fontSize: "24px",
              }}
            >
              최저가
            </p>
            <BsFillCaretRightFill
              style={{ color: "#2D4059", fontSize: "32px" }}
            />
            <div
              style={{
                color: "black",
                width: "400px",
                fontSize: "24px",
                borderBottom: "2px solid #2D4059",
              }}
            >
              {/* {item.suggestion ? item.suggestion + " 원" : "없음"} */}
              3000 원
            </div>
          </div>
        </div>
        <div className="row">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <p
              style={{
                width: "100px",
                height: "50px",
                backgroundColor: "#EA5455",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "17px",
                fontSize: "24px",
              }}
            >
              최고가
            </p>
            <BsFillCaretRightFill
              style={{ color: "#2D4059", fontSize: "32px" }}
            />
            <div
              style={{
                color: "black",
                width: "400px",
                fontSize: "24px",
                borderBottom: "2px solid #2D4059",
              }}
            >
              {/* {item.suggestion ? item.suggestion + " 원" : "없음"} */}
              100000 원
            </div>
          </div>
        </div>
      </div>
      {/* end price */}

      {/* start value log */}
      <div
        className="container-lg d-flex justify-content-center"
        style={{ marginTop: "50px" }}
      >
        <div style={{ width: "800px", marginTop: "30px", textAlign: "left" }}>
          <p style={{ fontSize: "24px", borderBottom: "2px solid #2D4059" }}>
            <span>평가로그</span>
          </p>
          {testArray.map((item, index) => {
            return (
              <span
                style={{
                  display: "inline-block",
                  maxWidth: "700px",
                  height: "40px",
                  backgroundColor: "#EA5455",
                  borderRadius: "5px",
                  padding: "10px",
                  marginBottom: "0",
                  marginRight: "10px",
                  overflow: "hidden",
                }}
                key={index}
              >
                {item.name} 님 {item.price} 원 {item.vdate}
              </span>
            );
          })}
        </div>
      </div>
      {/* end value log */}

      {/* start value input */}
      <div
        className="container-lg d-flex justify-content-center"
        style={{ marginTop: "100px" }}
      >
        <div
          style={{
            width: "75%",
            height: "500px",
            backgroundColor: "#FFD460",
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: "7px",
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FaDollarSign style={{ fontSize: "32px", color: "#EA5455" }} />
            <div
              style={{
                color: "black",
                width: "400px",
                fontSize: "24px",
                borderBottom: "2px solid #EA5455",
              }}
            >
              {/* {item.suggestion ? item.suggestion + " 원" : "없음"} */}
              평균가
            </div>
            <span style={{ fontSize: "32px" }}>원</span>
          </div>
          <div style={{ fontSize: "24px" }}>
            (로그인 유저 닉네임)님의 <br />
            평가금액은 ... ?
          </div>
          <div style={{ width: "80%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <BsPinFill style={{ fontSize: "32px", color: "#EA5455" }} />
              <div style={{ borderBottom: "2px solid #EA5455", width: "60%" }}>
                <input
                  style={{
                    color: "black",
                    width: "70%",
                    fontSize: "24px",
                    borderStyle: "none",
                    backgroundColor: "transparent",
                    textAlign: "center",
                  }}
                />
              </div>
              {/* {item.suggestion ? item.suggestion + " 원" : "없음"} */}
              <span style={{ fontSize: "32px" }}>원</span>
            </div>
            <Button
              style={{
                marginTop: "30px",
                backgroundColor: "#EA5455",
                borderStyle: "none",
              }}
            >
              평가입력
            </Button>
          </div>
        </div>
      </div>
      <div className="container-lg d-flex justify-content-center">
        <div style={{ display: "flex", width: "800px", justifyContent: "end" }}>
          <div style={{ fontSize: "24px" }}>
            <GrView />
            <span style={{ padding: "0 10px" }}>{item.rcount}</span>
            <AiFillLike style={{ color: "#EA5455" }} />
            <span style={{ padding: "0 10px" }}>{item.like}</span>
            <AiFillDislike style={{ color: "#F07B3F" }} />
            <span style={{ padding: "0 10px" }}>{item.dislike}</span>
          </div>
        </div>
      </div>
      {/* end value input */}

      {/* start reply box */}
      <ReplyPagination />
      <div className="container-lg d-flex justify-content-center">
        <div style={{ width: "100%" }}>
          <textarea
            placeholder="댓글을 입력하세요"
            style={{ width: "70%", height: "100px", resize: "none" }}
          />
          <div style={{ display: "flex", justifyContent: "end", width: "85%" }}>
            <Button style={{ backgroundColor: "#EA5455", borderStyle: "none" }}>
              댓글등록
            </Button>
          </div>
        </div>
      </div>
      {/* end reply box */}

      {/* start board list box */}
      <BoardListPagination />
      {/* end reply box */}
    </div>
  );
};

export default DetailBoard;
