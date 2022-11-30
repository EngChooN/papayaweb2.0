import * as Header from "./Header.styles";
import { AiFillCaretDown } from "@react-icons/all-files/ai/AiFillCaretDown";
import { AiFillCaretUp } from "@react-icons/all-files/ai/AiFillCaretUp";
import { imgUrl } from "../../ts/url";
import DropDownWindow from "../../component/papaya/dropDownWindow/DropDownWindow";
import LocalBtn from "../../component/papaya/localBtn/LocalBtn";

export default function HeaderUI(props: any) {
  return (
    <>
      <Header.Wrapper>
        <Header.Nav>
          {/* 헤더 왼쪽 */}
          <Header.Left>
            <Header.PapayaLogo src={imgUrl.papayaLogo} />
            {/* 드롭다운 버튼 */}
            <Header.NavBtn onClick={props.onClickDropDown}>
              GAMES
              {/* 드롭다운 버튼 아이콘 */}
              {!props.dropDownFlag ? (
                <AiFillCaretDown style={{ paddingTop: "6px" }} />
              ) : (
                <AiFillCaretUp style={{ paddingTop: "6px" }} />
              )}
            </Header.NavBtn>
            <Header.CashShopBtn>CASH SHOP</Header.CashShopBtn>
          </Header.Left>
          {/* 헤더 오른쪽 */}
          <Header.Right>
            <Header.NavBtn style={{ paddingLeft: "0px" }}>
              Create Free Account
            </Header.NavBtn>
            <Header.NavBtn>Sign in</Header.NavBtn>
            <Header.NavBtn>Support</Header.NavBtn>
            <LocalBtn />
          </Header.Right>
        </Header.Nav>
      </Header.Wrapper>
      {/* 드롭다운 시, 내려오는 창 (컴포넌트) */}
      <DropDownWindow dropDownFlag={props.dropDownFlag} />
    </>
  );
}
