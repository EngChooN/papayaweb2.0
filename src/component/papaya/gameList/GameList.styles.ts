import styled from "@emotion/styled";

export const Wrapper = styled.section`
  /* max-width: 1450px; */
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #29b06d;
  text-transform: uppercase;
  margin-right: 15px;
`;

export const TapWrapper = styled.div`
  display: flex;
`;

export const TapMenu = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 65px;
  height: 35px;
  padding: 9px 12px;
  border-radius: 21.5px;
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-right: 5px;
  color: #7f8c8d;
  :active,
  :hover {
    background-color: #29b06d;
    color: white;
  }
`;

export const TapName = styled.div`
  /* margin-left: 6px; */
  font-weight: 600;
  font-size: 12px;
`;

export const ListsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(213px, auto));
`;

export const ElWrapper = styled.div`
  /* margin: 1.5rem 1.68rem; */
  box-sizing: border-box;
  width: 100%;
  max-width: 21.3rem;
  padding: 7px 8.5px 10px 8.5px;
  border: 1px solid #dee1e2;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const ElThumbnail = styled.img``;

export const ElInfoWrapper = styled.div``;

export const ElInfoImg = styled.img``;

export const ElInfoDetail = styled.div``;
