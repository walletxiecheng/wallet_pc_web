/* eslint-disable react/prop-types */
import React from "react";
import { useTranslation } from "react-i18next";
import style from "./index.module.less";
import union from "../../icon/union.png";
import readyImg from "../../image/readyImg.png";
import safe from "../../icon/safe.png";
import enrich from "../../icon/enrich.png";
import market from "../../icon/market.png";
import privacy from "../../icon/privacy.png";
const advanceList = [
  {
    title: "Safe and convenient",
    content: "A set of mnemonic words, easy to manage multi-chain assets.",
    icon: safe,
  },
  {
    title: "Enrich the ecology",
    content: "Support NFTs, DeFi, DApp, data market, industry information.",
    icon: enrich,
  },
  {
    title: "Blockchain market data",
    content:
      "Check the price, market value ranking, and 24-hour trading volume of each currency in real time.",
    icon: market,
  },
  {
    title: "Privacy oriented",
    content:
      "Use a secure encryption protocol and only exist on the device to protect data security.",
    icon: privacy,
  },
];
export function AdvanceItem({ title, content, icon }) {
  const { t } = useTranslation();

  return (
    <div className={style.advanceContainer}>
      <img  className={style.advIcon} src={icon} alt="" />
      <header className={style.advHeader}>{t(title)} </header>
      <p>
        <span className={style.advContent}>{t(content)}</span>
      </p>
    </div>
  );
}

export default function ReadyExplore() {
  const { t } = useTranslation();

  return (
    <div className={style.readyContainer}>
      <header className={style.header}>
        <img className={style.headerIcon} src={union} alt="" />
      </header>
      <div className={style.readyBox}>
        <div className={style.content}>
          <header className={style.contentTitle}>
            {t("Ready to explore Token 13?")}
          </header>
          <div className={style.advanceBox}>
            {advanceList.map((item, index) => (
              <AdvanceItem
                key={index}
                title={item.title}
                content={item.content}
                icon={item.icon}
              ></AdvanceItem>
            ))}
          </div>
        </div>
        <div className={style.previewBox}>
          <img  width={320} src={readyImg} alt="" />
        </div>
      </div>
    </div>
  );
}
