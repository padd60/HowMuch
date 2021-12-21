import React, { useState } from "react";
import { Card } from "react-bootstrap";
import noImage from "../img/noImage.svg";
import { BsFillCaretRightFill } from "react-icons/bs";

const ItemCard = () => {
  let [testTag, testTagChange] = useState(["태그1", "태그2"]);

  return (
    <div style={{ margin: "20px auto" }}>
      <Card style={{ width: "300px", color: "white", padding: "10px" }}>
        <Card.Img
          variant="top"
          src={noImage}
          style={{ border: "2px solid #2D4059" }}
        />
        <Card.Body style={{ padding: "1rem 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Card.Title
              style={{
                width: "200px",
                height: "40px",
                textAlign: "left",
                backgroundColor: "#2D4059",
                borderRadius: "5px",
                padding: "10px",
                overflow: "hidden",
              }}
            >
              Title~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            </Card.Title>
            <p
              style={{
                maxWidth: "100px",
                height: "40px",
                backgroundColor: "#2D4059",
                borderRadius: "5px",
                padding: "10px",
                overflow: "hidden",
              }}
            >
              Writer
            </p>
          </div>

          {/* <Card.Text
            style={{
              height: "150px",
              backgroundColor: "#2D4059",
              borderRadius: "5px",
              padding: "10px",
              overflow: "hidden",
            }}
          >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                width: "70px",
                height: "40px",
                backgroundColor: "#2D4059",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "0",
              }}
            >
              제시가
            </p>
            <BsFillCaretRightFill
              style={{ color: "#EA5455", fontSize: "32px" }}
            />
            <div
              style={{
                color: "black",
                width: "250px",
                fontSize: "24px",
                borderBottom: "2px solid #2D4059",
              }}
            >
              없음
            </div>
          </div>
          <div style={{ marginTop: "20px", textAlign: "left" }}>
            {testTag.map((item, index) => {
              return (
                <span
                  style={{
                    minWidth: "70px",
                    height: "40px",
                    backgroundColor: "#2D4059",
                    borderRadius: "5px",
                    padding: "10px",
                    marginBottom: "0",
                    marginRight: "10px",
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
  );
};

export default ItemCard;
