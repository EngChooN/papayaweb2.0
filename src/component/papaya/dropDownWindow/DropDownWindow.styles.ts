import styled from "@emotion/styled";

export const DropDownWin = styled.section`
  background-color: #ffffff;
  width: 100%;
  height: ${(props: any) => (props.dropDownFlag ? "250px" : "0px")};
  box-shadow: 0px 5px 5px rgb(0 0 0 / 30%);
  transition: opacity 0.1s ease, top 0.3s ease, height 0.5s ease;
  position: absolute;
  display: flex;
`;

export const gameSection = styled.div`
  width: 100%;
  /* padding: 65px; */
  background-color: gray;
  margin-top: 65px;
  border-right: 1px solid white;
  :last-child {
    border-right: 0px;
  }
`;
