import styled from "@emotion/styled";
import { imgUrl } from "../../../ts/url";
import { AiFillCaretDown } from "@react-icons/all-files/ai/AiFillCaretDown";
import { AiFillCaretUp } from "@react-icons/all-files/ai/AiFillCaretUp";
import { useState } from "react";

const Wrapper = styled.div`
  padding-left: 30px;
  display: flex;
  align-items: center;
  padding-bottom: 3px;
  font-size: 10px;
  font-weight: 600;
  color: black;
  cursor: pointer;
`;

const LocalImg = styled.img``;

const LocalWindow = styled.div`
  position: absolute;
  background-color: white;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 8px 6px 15px -3px rgb(0 0 0 / 48%);
  opacity: ${(props: any) => (!props.mouseOver ? "0" : "1")};
  transition: opacity 0.1s ease-in-out;
  width: 100px;
  top: 50px;
  right: 110px;
`;

const LocalList = styled.ul``;

const LocalEl = styled.li`
  list-style-type: none;
  color: #313131;
  font-size: 13px;
  font-weight: 500;
  :hover {
    background-color: rgba(49, 49, 49, 0.2);
  }
`;

export default function LocalBtn() {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <Wrapper
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <LocalImg src={imgUrl.localImg} style={{ paddingRight: "5px" }} />
        English
        {!mouseOver ? (
          <AiFillCaretDown style={{ height: "10px" }} />
        ) : (
          <AiFillCaretUp style={{ height: "10px" }} />
        )}
      </Wrapper>
      <LocalWindow
        mouseOver={mouseOver}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <LocalList>
          <LocalEl>ex.1</LocalEl>
          <LocalEl>ex.2</LocalEl>
          <LocalEl>ex.3</LocalEl>
        </LocalList>
      </LocalWindow>
    </>
  );
}
