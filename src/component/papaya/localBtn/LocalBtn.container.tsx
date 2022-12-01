import { useEffect, useState } from "react";
import LocalBtnUI from "./LocalBtn.presenter";

export default function LocalBtn() {
  const [mouseOver, setMouseOver] = useState(false);

  // 현재 선택언어
  const [currentLang, setCurrentLang] = useState("English");

  // 언어선택 데이터
  const [languages, setLanguages] = useState([
    {
      lang: "English",
      value: true,
      code: "EN",
      id: 1,
    },
    {
      lang: "Français",
      value: false,
      code: "FR",
      id: 2,
    },
    {
      lang: "Deutsch",
      value: false,
      code: "DE",
      id: 3,
    },
    {
      lang: "Português",
      value: false,
      code: "PT",
      id: 4,
    },
    {
      lang: "Türk",
      value: false,
      code: "TR",
      id: 5,
    },
    {
      lang: "Melayu",
      value: false,
      code: "MY",
      id: 6,
    },
  ]);

  // [로컬스토리지에서 국가코드를 가져오는 함수]
  const getLocalstorageLang = () => {
    // 화면으로 표시된 선택한 언어를 업데이트 위해 다시 로컬스토리지의 국가코드를 불러와서,
    if (localStorage.getItem("countryCode") !== null) {
      console.log(localStorage.getItem("countryCode"));
      const getSelectLang = localStorage.getItem("countryCode");
      // 가져온 국가코드로 언어 배열 데이터의 상태값을 바꿈
      for (let i = 0; i < languages.length; i++) {
        if (languages[i].code === getSelectLang) {
          languages[i].value = true;
          setCurrentLang(languages[i].lang);
        } else {
          languages[i].value = false;
        }
      }
    }
  };

  // [언어를 선택하고 로컬스토리지 데이터를 업데이트 하는 함수]
  const ChooseLanguage = (langId: number) => {
    // 선택한 언어의 id값을 가져와 해당하는 객체를 찾고,
    const selectLang = languages.find((el) => {
      return el.id === langId;
    });
    // 객체의 국가코드를 로컬스토리지에 올림
    if (selectLang !== undefined)
      localStorage.setItem("countryCode", selectLang.code);
    // [로컬스토리지에서 국가코드를 가져오는 함수]
    getLocalstorageLang();
  };

  useEffect(() => {
    // 사이트 렌더링 시, 로컬스토리지의 국가코드를 가져옴
    getLocalstorageLang();
  }, [languages]);

  return (
    <LocalBtnUI
      mouseOver={mouseOver}
      setMouseOver={setMouseOver}
      languages={languages}
      ChooseLanguage={ChooseLanguage}
      currentLang={currentLang}
    />
  );
}
