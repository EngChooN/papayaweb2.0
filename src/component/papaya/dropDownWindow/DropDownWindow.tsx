import styled from "@emotion/styled";

const DropDownWin = styled.section`
  background-color: #ffffff;
  width: 100%;
  height: ${(props: any) => (props.dropDownFlag ? "250px" : "0px")};
  box-shadow: 0px 5px 5px rgb(0 0 0 / 30%);
  transition: opacity 0.1s ease, top 0.3s ease, height 0.5s ease;
  position: absolute;
`;

export default function DropDownWindow(props: any) {
  return <DropDownWin dropDownFlag={props.dropDownFlag}></DropDownWin>;
}
