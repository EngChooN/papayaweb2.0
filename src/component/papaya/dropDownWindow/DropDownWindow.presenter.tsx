import * as DropDown from "./DropDownWindow.styles";

export default function DropDownWindowUI(props: any) {
  return (
    <DropDown.DropDownWin dropDownFlag={props.dropDownFlag}>
      <DropDown.gameSection>test</DropDown.gameSection>
      <DropDown.gameSection>test</DropDown.gameSection>
    </DropDown.DropDownWin>
  );
}
