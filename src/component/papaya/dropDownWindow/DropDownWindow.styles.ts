import styled from "@emotion/styled";

export const DropDownWin = styled.section`
  background-color: #ffffff;
  width: 100%;
  top: 65px;
  height: ${(props: any) => (props.dropDownFlag ? "250px" : "0px")};
  box-shadow: 0px 5px 5px rgb(0 0 0 / 30%);
  transition: opacity 0.1s ease, top 0.3s ease, height 0.5s ease;
  position: absolute;
  display: flex;
  overflow-y: hidden;
`;

export const gameSection = styled.div`
  width: 100%;
  color: white;
  transition: all 0.5s ease-out;
  background-color: gray;
  border-right: 1px solid white;
  :last-child {
    border-right: 0px;
  }
`;
