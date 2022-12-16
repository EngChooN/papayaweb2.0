import styled from "@emotion/styled";

export const Wrapper = styled.section`
  /* max-width: 1450px; */
  width: 100%;
  max-height: 332px;
  height: 330px;
  margin-top: 70px;
  margin-bottom: 70px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  z-index: 8;
  background-color: #f1f2f6;
  border-radius: 10px 0px 0px 10px;
`;

export const Left = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
  position: relative;
`;

export const LeftImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 80px;
  max-width: 276px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #464646;
  z-index: 1;
`;

export const Content = styled.div`
  font-size: 16px;
  color: #464646;
  z-index: 1;
`;

export const Btn = styled.div`
  margin-top: 1.9rem;
  width: 174px;
  height: 36px;
  border-radius: 100px;
  background-color: #29b06d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Right = styled.div`
  /* width: 30%; */
  width: 365px;
  min-width: 365px;
  display: flex;
  flex-direction: column;
  background-color: #1e2023;
  padding: 20px 40px;
  border-radius: 0px 10px 10px 0px;
`;

export const Tap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

export const TapTitle = styled.div`
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
`;

export const TapTitleLink = styled.a`
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
  :hover {
    text-decoration: underline;
  }
`;

export const TapLists = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
`;

export const TapList = styled.a`
  font-size: 12px;
  width: 111px;
  margin-bottom: 10px;
  margin-right: 19px;
  :hover {
    text-decoration: underline;
  }
`;

export const BottomSection = styled.div`
  display: flex;
`;
