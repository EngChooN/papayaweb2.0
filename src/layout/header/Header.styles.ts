import styled from "@emotion/styled";

export const Wrapper = styled.header`
  background-color: #f8f8f8;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid rgba(169, 169, 169, 0.5);
  display: flex;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  z-index: 1;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.section`
  display: flex;
  align-items: center;
`;

export const PapayaLogo = styled.img`
  width: 158px;
`;

export const DropDownBtn = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #6d6d6d;
  padding-left: 30px;
  transition: all 0.3s ease-in;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #29b06d;
  }
`;

export const NavBtn = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #6d6d6d;
  padding-left: 30px;
  transition: all 0.3s ease-in;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #29b06d;
  }
`;

export const CashShopBtn = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #29b06d;
  padding-left: 30px;
  transition: all 0.3s ease-out;
  :hover {
    color: #0c8b4c;
  }
`;

export const Right = styled.section`
  display: flex;
  align-items: center;
`;

// export const DropDownWindow = styled.article`
//   background-color: #ffffff;
//   width: 100%;
//   height: ${(props: any) => (props.dropDownFlag ? "250px" : "0px")};
//   box-shadow: 0px 5px 5px rgb(0 0 0 / 30%);
//   transition: opacity 0.1s ease, top 0.3s ease, height 0.5s ease;
//   position: absolute;
// `;
