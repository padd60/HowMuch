import React from "react";
import { SiCashapp } from "react-icons/si";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ItemCard from "./ItemCard";

let TopTitle = styled("p")`
  font-size: 48px;
`;

let Line = styled("div")`
  width: 80%;
  height: 5px;
  background-color: #2d4059;
  margin: 0 auto;
`;

const BoardMain = () => {
  let state = useSelector((state) => {
    return state;
  });

  let boardState = state.boardReducer;

  return (
    <div>
      <div className="cotainer-lg">
        <div
          className="row d-flex justify-content-center"
          style={{ paddingTop: "50px" }}
        >
          <div className="col-lg-1" style={{ marginBottom: "20px" }}>
            <SiCashapp
              style={{ color: "#EA5455", fontSize: "70px", margin: "0 20px" }}
            />
          </div>
          <div className="col-lg-9">
            <TopTitle>Check items & Feed back</TopTitle>
          </div>
        </div>
      </div>
      <Line></Line>

      <div className="container-lg" style={{ margin: "80px auto" }}>
        <div className="row">
          {boardState.map((item, index) => {
            return (
              <div
                className="col-lg-4 d-flex justify-content-center"
                key={index}
              >
                <ItemCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardMain;
