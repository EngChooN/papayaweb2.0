import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.section`
  width: 100%;
  height: 580px;
`;

export const ElWrapper = styled.div`
  width: 100%;
  height: 580px;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  padding-left: 11.5%;
  background-image: ${(props: any) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Logo = styled.img``;

export const Title = styled.div`
  max-width: 600px;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  text-shadow: 2px 4px 0 rgb(0 0 0 / 50%);
`;

export const Content = styled.div`
  margin-top: 11px;
  max-width: 459px;
  font-size: 20px;
  color: #dee1e2;
  text-shadow: 2px 4px 0 rgb(0 0 0 / 50%);
`;

export const Button = styled.div`
  outline: none;
  margin-top: 30px;
  display: block;
  max-width: 138px;
  width: 100%;
  padding: 8px 29px;
  border: 1px solid #ffffff;
  border-radius: 100px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;

// 슬라이더 커스텀
export const CustomSlider = styled(Slider)`
  overflow: hidden;
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
