import * as Lang from "./LocalBtn.styles";
import { papayaImgUrl } from "../../../ts/data/url";
import { AiFillCaretDown } from "@react-icons/all-files/ai/AiFillCaretDown";
import { AiFillCaretUp } from "@react-icons/all-files/ai/AiFillCaretUp";
import { BsCheck } from "@react-icons/all-files/bs/BsCheck";

export default function LocalBtnUI(props: any) {
  return (
    <>
      <Lang.Wrapper
        onMouseOver={() => props.setMouseOver(true)}
        onMouseLeave={() => props.setMouseOver(false)}
      >
        <Lang.LocalImg
          src={papayaImgUrl.localImg}
          style={{ paddingRight: "5px" }}
        />
        <Lang.CurrentLanguage>{props.currentLang}</Lang.CurrentLanguage>
        {!props.mouseOver ? (
          <AiFillCaretDown style={{ height: "10px" }} />
        ) : (
          <AiFillCaretUp style={{ height: "10px" }} />
        )}
      </Lang.Wrapper>
      <Lang.LocalWindow
        topPosition={props.topPosition}
        mouseOver={props.mouseOver}
        onMouseOver={() => props.setMouseOver(true)}
        onMouseLeave={() => props.setMouseOver(false)}
      >
        <Lang.LocalList>
          {props.languages.map(
            (el: { lang: string; value: boolean; id: number }) => (
              <Lang.LocalEl
                key={el.id}
                onClick={(e) => {
                  props.ChooseLanguage(el.id);
                  e.stopPropagation();
                }}
              >
                {el.value ? (
                  <Lang.CheckIcon>
                    <BsCheck style={{ fontSize: "12px" }} />
                  </Lang.CheckIcon>
                ) : (
                  <Lang.NoIcon />
                )}

                <Lang.Language>{el.lang}</Lang.Language>
              </Lang.LocalEl>
            )
          )}
        </Lang.LocalList>
      </Lang.LocalWindow>
    </>
  );
}
