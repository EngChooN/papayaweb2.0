import { useState } from "react";
import HeaderUI from "./Header.presenter";

export default function Header() {
  // 드롭다운 상태관리
  const [dropDownFlag, setDropDownFlag] = useState(false);

  // 드롭다운 버튼 클릭 함수
  const onClickDropDown = () => {
    console.log("dropState", dropDownFlag);
    setDropDownFlag(!dropDownFlag);
  };

  return (
    <HeaderUI onClickDropDown={onClickDropDown} dropDownFlag={dropDownFlag} />
  );
}
