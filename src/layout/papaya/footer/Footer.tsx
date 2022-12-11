import styled from "@emotion/styled";
import { papayaImgUrl } from "../../../ts/data/url";
import { btnList } from "../../../ts/data/footerBtnList";
import LocalBtn from "../../../component/papaya/localBtn/LocalBtn.container";

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 110px;
  background-color: #eaeaeb;
  padding-left: 95px;
  padding-right: 95px;
  padding-top: 15px;
  padding-bottom: 20px;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
`;

const LogoSection = styled.div`
  width: 100%;
  display: flex;
`;

const LogoImg = styled.img`
  cursor: pointer;
  width: 160px;
`;

const BtnSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

const Capitalize = styled.div`
  width: 100%;
  color: #767676;
  font-size: 13px;
  padding-top: 20px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <TopSection>
        <LogoSection>
          <LogoImg src={papayaImgUrl.papayaLogo} />
          <LogoImg
            src={papayaImgUrl.vertigoLogo}
            style={{
              paddingLeft: "15px",
              paddingBottom: "6px",
            }}
          />
        </LogoSection>
        <BtnSection>
          {btnList.map((el, index) => (
            <a href={el.url} key={index}>
              <Btn>{el.title}</Btn>
            </a>
          ))}
          <LocalBtn bottomPosition={35} />
        </BtnSection>
      </TopSection>
      <Capitalize>
        © 2021 Vertigo Games International Pte. Ltd. All Rights Reserved
      </Capitalize>
    </Wrapper>
  );
}
