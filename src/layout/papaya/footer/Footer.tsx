import styled from "@emotion/styled";
import { papayaImgUrl } from "../../../ts/data/url";
import { btnList } from "../../../ts/data/footerBtnList";

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #eaeaeb;
  padding-top: 10px;
  padding-bottom: 20px;
  position: relative;
  bottom: 0;
`;

const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RightSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Btn = styled.div`
  vertical-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #313131;
  transition: all 0.3s ease-in;
  display: flex;
  align-items: center;
  padding-right: 7px;
  padding-left: 7px;
  border-right: 1.1px solid #767676;
  cursor: pointer;
  :hover {
    color: #0c8b4c;
  }
`;

const BottomSection = styled.div``;

const Capitalize = styled.div`
  width: 100%;
  color: #767676;
  display: flex;
  justify-content: center;
  font-size: 13px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <LeftSection>
        <LogoSection>
          <img src={papayaImgUrl.papayaLogo} style={{ width: "160px" }} />
          <img
            src={papayaImgUrl.vertigoLogo}
            style={{
              width: "160px",
              paddingLeft: "15px",
              paddingBottom: "6px",
            }}
          />
        </LogoSection>
        <Capitalize>
          © 2021 Vertigo Games International Pte. Ltd. All Rights Reserved
        </Capitalize>
      </LeftSection>
      <RightSection>
        {btnList.map((el, index) => (
          <a href={el.url} key={index}>
            <Btn>{el.title}</Btn>
          </a>
        ))}
      </RightSection>
    </Wrapper>
  );
}
