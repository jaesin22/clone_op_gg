import React, { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import useSummonerData from "../hooks/useSummonerData";
import { getMatchId } from "../api/Champion";

const MainTop = () => {
  const { isDarkMode } = useTheme();
  const [selected, setSelected] = useState("ALL");
  const { puuId } = useSummonerData();

  const handleButtonClick = (name: string) => {
    setSelected(name);
  };

  console.log(puuId);

  return (
    <div
      className={`flex justify-between p-1 ${
        isDarkMode ? `bg-[#31313C]` : `bg-white`
      } border-[#ebeef1] rounded`}
    >
      <ul className="flex h-7">
        <li>
          <button
            className={`block py-1 px-3 rounded text-sm h-7 box-border ${
              selected === "ALL"
                ? `${
                    isDarkMode
                      ? `text-white bg-[#515163]`
                      : `bg-[#ECF2FF] text-[#4171D6]`
                  } font-bold`
                : `${
                    isDarkMode
                      ? `hover:bg-[#282830] text-white`
                      : `hover:bg-[#ebecf3] text-black`
                  }`
            }`}
            onClick={() => handleButtonClick("ALL")}
          >
            <span>전체</span>
          </button>
        </li>
        <li>
          <button
            className={`block py-1 px-3 rounded text-sm h-7 box-border ${
              selected === "RANKED"
                ? `${
                    isDarkMode
                      ? `text-white bg-[#515163]`
                      : `bg-[#ECF2FF] text-[#4171D6]`
                  } font-bold`
                : `${
                    isDarkMode
                      ? `hover:bg-[#282830] text-white`
                      : `hover:bg-[#ebecf3] text-black`
                  } `
            }`}
            onClick={() => handleButtonClick("RANKED")}
          >
            <span>랭크게임</span>
          </button>
        </li>
        <li className="ml-1 align-top list-none">
          <span className={`inline-block leading-5 `}>
            <label className="hidden" htmlFor="queueType">
              큐 타입
            </label>
            <select
              className={`py-1 pr-6 pl-3 rounded cursor-pointer text-sm font-normal outline-none ${
                isDarkMode ? `text-white bg-[#31313C]` : `bg-white text-black`
              } ${isDarkMode ? `hover:bg-[#282830]` : `hover:bg-[#ebecf3]`}`}
              id="queueType"
            >
              <option value="TOTAL">큐 타입</option>
              <option value="NORMAL">큐 타입</option>
              <option value="무작위 총력전">큐 타입</option>
            </select>
          </span>
        </li>
      </ul>
    </div>
  );
};
export default MainTop;
