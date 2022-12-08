import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.section`
  width: 100%;
  height: 500px;
`;

export const ElWrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 11.5%;
`;

export const Logo = styled.img``;

export const Title = styled.div`
  font-size: 5rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 2px 4px 0 rgb(0 0 0 / 50%);
`;

export const Content = styled.div`
  margin-top: 1.1rem;
  max-width: 45.9rem;
  font-size: 2rem;
  color: #dee1e2;
  text-shadow: 2px 4px 0 rgb(0 0 0 / 50%);
`;

export const Button = styled.div`
  outline: none;
  margin-top: 3rem;
  display: block;
  max-width: 18.2rem;
  padding: 0.8rem 2.9rem;
  border: 1px solid #ffffff;
  border-radius: 100px;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;

// 슬라이더 커스텀
export const CustomSlider = styled(Slider)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    //슬라이더  컨텐츠
  }
`;
