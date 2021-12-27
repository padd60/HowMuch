import React, { useEffect, useState } from "react";
import { SiCashapp } from "react-icons/si";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ItemCard from "./ItemCard";
import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

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

  // pagination data
  const items = boardState;

  let [select, SetSelect] = useState("");
  let [search, SetSearch] = useState("");

  useEffect(() => {
    console.log(select);
  }, [select]);

  useEffect(() => {
    console.log(search);
  }, [search]);

  let navigate = useNavigate();

  // pagination
  function Items({ currentItems }) {
    return (
      <>
        <div className="container-lg" style={{ margin: "50px auto" }}>
          <div className="row">
            {currentItems &&
              currentItems.map((item, index) => (
                <div
                  className="col-lg-4 d-flex justify-content-center"
                  key={index}
                  onClick={() => {
                    navigate("/detail/" + item.bno);
                    console.log(item);
                  }}
                >
                  <ItemCard item={item} />
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            marginPagesDisplayed={0}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel=""
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </>
    );
  }
  // end pagination

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
            <TopTitle>Check items & Feed back</TopTitle>
          </div>
        </div>
      </div>
      <Line></Line>
      <div
        className="container-lg"
        style={{
          padding: "30px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaSearch
            onClick={() => {
              let search = document.getElementById("search").value;
              SetSearch(search);
            }}
            style={{ fontSize: "24px", marginRight: "10px", cursor: "pointer" }}
          />
          <input id="search" type="text" placeholder="검색어를 입력해주세요" />
          <div style={{ marginLeft: "20px" }}>
            <select
              id="tagSelect"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                SetSelect(e.target.options[e.target.selectedIndex].text);
              }}
            >
              <option defaultValue>검색항목</option>
              <option value="1">제목</option>
              <option value="2">작성자</option>
              <option value="3">태그</option>
            </select>
          </div>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Button
            onClick={() => {
              navigate("/register");
            }}
          >
            글등록
          </Button>
        </div>
      </div>
      <PaginatedItems itemsPerPage={6} />
    </div>
  );
};

export default BoardMain;
