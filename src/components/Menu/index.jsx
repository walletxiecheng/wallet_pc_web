import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../icon/logo.png";
import token from "../../icon/Token13.png";
import language from "../../icon/Language.png";
import languagehover from "../../icon/Language-hover.png";
import check from "../../icon/Check.png";
import style from "./index.module.less";

// 语言种类
export function LanguageTypes() {
  const { i18n } = useTranslation();
  const [currentLaguage, setCurrentLaguage] = useState(i18n.language);
  const languageList = [
    {
      language: "zh",
      label: "简体中文",
    },
    {
      language: "en",
      label: "English",
    },
  ];
  // 更新语言
  const changeLanguage = (type) => {
    i18n.changeLanguage(type);
    setCurrentLaguage(i18n.language);
  };

  return (
    <div className={style.languageList}>
      <div className={style.languageGroup}>
        {languageList.map((item, idx) => {
          const isSelect = currentLaguage === item.language;

          return (
            <li
              className={style.languageItem}
              key={idx}
              onClick={() => {
                changeLanguage(item.language);
              }}
            >
              <span className={isSelect && style.languageLabel}>
                {item.label}
              </span>
              {currentLaguage === item.language && (
                <img className={style.selectIcon} src={check} alt="" />
              )}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default function Menu() {
  // 滚动时距离顶部高度
  const [scrollPosition, setScrollPosition] = useState(0);
  // 语言图标
  const [icon, setIcon] = useState(language);
  // 展示语言类型组件
  const [showTip, setShowTip] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isFixed = scrollPosition > 100;

  // 查看当前选择的语法
  useEffect(() => {
    // 处理鼠标滚动事件
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        isFixed ? `${style.menuContainer} ${style.fixed}` : style.menuContainer
      }
    >
      <div className={style.menuBox}>
        {/* logo */}
        <div className={style.logo} onClick={()=>{
            navigate('/index')
        }}>
          <img width={40} src={logo} alt="" />
          <img width={117} className={style.logoToken} src={token} alt="" />
        </div>
        {/* 协议/语言 */}
        <div className={style.menuContent}>
          <Link className={style.link} to='agreem'>
            {t("User Agreement")}
          </Link>
          <Link className={style.link} to='privacy'>
            {t("Privacy Policy")}
          </Link>
          
          <div className={style.languageContainer}>
            <img
              alt=""
              src={icon}
              className={style.languageIcon}
              onMouseOver={() => {
                setIcon(languagehover);
                setShowTip(true);
              }}
              onMouseLeave={() => {
                setIcon(language);
                setTimeout(() => {
                  setShowTip(false);
                }, 1000);
              }}
            />
            {showTip && <LanguageTypes />}
          </div>
        </div>
      </div>
    </div>
  );
}
