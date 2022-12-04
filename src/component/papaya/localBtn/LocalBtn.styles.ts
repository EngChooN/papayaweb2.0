import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding-left: 30px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  // 윈도우에서...
  padding-top: 15px;
  font-size: 8px;
  color: black;
  cursor: pointer;
`;

export const LocalImg = styled.img``;

export const LocalWindow = styled.div`
  position: absolute;
  background-color: white;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 8px 6px 15px -3px rgb(0 0 0 / 48%);
  opacity: ${(props: any) => (!props.mouseOver ? "0" : "1")};
  z-index: ${(props: any) => (!props.mouseOver ? "-1" : "1")};
  transition: opacity 0.1s ease-in-out;
  width: 100px;
  top: ${(props: any) => props.topPosition + "px"};
  right: 110px;
`;

export const CurrentLanguage = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding-right: 2px;
  :hover {
    color: #29b60d;
  }
`;

export const LocalList = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const CheckIcon = styled.div`
  color: #313131;
`;

export const NoIcon = styled.div`
  height: 21px;
  padding-left: 12px;
`;

export const Language = styled.span`
  font-size: 11px;
  font-weight: 500;
  padding-left: 5px;
`;

export const LocalEl = styled.li`
  color: #7f8c8d;
  display: flex;
  align-items: center;
  padding-left: 15px;
  width: 100%;
  cursor: pointer;
  :hover {
    background-color: rgba(49, 49, 49, 0.2);
    color: #313131;
  }
`;
