import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  width: ${(props) => (props.hoverSate ? "300px" : "450px")};
  height: 450px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 2s;
`;
