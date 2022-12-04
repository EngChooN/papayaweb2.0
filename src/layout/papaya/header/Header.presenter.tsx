import * as Header from "./Header.styles";
import { AiFillCaretDown } from "@react-icons/all-files/ai/AiFillCaretDown";
import { AiFillCaretUp } from "@react-icons/all-files/ai/AiFillCaretUp";
import { papayaImgUrl } from "../../../ts/data/url";
import DropDownWindow from "../../../component/papaya/dropDownWindow/DropDownWindow.container";
import LocalBtn from "../../../component/papaya/localBtn/LocalBtn.container";

export default function HeaderUI(props: any) {
  return (
    <>
      <Header.Wrapper>
        <Header.Nav>
          {/* 헤더 왼쪽 */}
          <Header.Left>
            <Header.PapayaLogo src={papayaImgUrl.papayaLogo} />
            {/* 드롭다운 버튼 */}
            <Header.DropDownBtn onClick={props.onClickDropDown}>
              GAMES
              {/* 드롭다운 버튼 아이콘 */}
              {!props.dropDownFlag ? (
                <AiFillCaretDown
                  style={{ height: "15px", paddingTop: "4px" }}
                />
              ) : (
                <AiFillCaretUp style={{ height: "15px", paddingTop: "4px" }} />
              )}
            </Header.DropDownBtn>
            <Header.CashShopBtn>CASH SHOP</Header.CashShopBtn>
          </Header.Left>
          {/* 헤더 오른쪽 */}
          <Header.Right>
            <Header.NavBtn style={{ paddingLeft: "0px" }}>
              Create Free Account
            </Header.NavBtn>
            <Header.NavBtn>Sign in</Header.NavBtn>
            <Header.NavBtn>Support</Header.NavBtn>
            {/* 언어변경 버튼 (컴포넌트) */}
            <LocalBtn topPosition={50} />
          </Header.Right>
        </Header.Nav>
      </Header.Wrapper>
      {/* 드롭다운 시, 내려오는 창 (컴포넌트) */}
      <DropDownWindow dropDownFlag={props.dropDownFlag} />
    </>
  );
}
