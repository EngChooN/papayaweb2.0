import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`;

export const ElWrapper = styled.div`
  background-color: red;
  width: 80px;
  height: 500px;
`;

export const NextArrow = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  right: 10px;
`;

export const Dots = styled.div`
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 10rem;
  height: 1rem;
  border-radius: 5px;
  background-color: #7f8c8d;
  bottom: 10px;
`;

export const CustomSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    //슬라이더  컨텐츠
  }
`;
