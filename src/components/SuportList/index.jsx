/* eslint-disable react/prop-types */
import React from "react";
import ellips from "../../icon/Ellipse.png";
import style from "./index.module.less";
import { useTranslation } from "react-i18next";
import suportIcon1 from "../../icon/suporr1.png";
import suportIcon2 from "../../icon/suporr2.png";
import suportIcon3 from "../../icon/suporr3.png";
import suportIcon4 from "../../icon/suporr4.png";
import suportIcon5 from "../../icon/suporr5.png";
import suportIcon6 from "../../icon/suporr6.png";

const tips = [
  {
    content: "Frax.finance",
  },
  {
    content: "Synthetix",
  },
  {
    content: "Dextools",
  },
  {
    content: "Beefy.finance",
  },
  {
    content: "Oceanprotocol",
  },
  {
    content: "Morpho",
  },
  {
    content: "Dappradar",
  },
  {
    content: "Abracadabra",
  },
  {
    content: "Boardroom",
  },
  {
    content: "Safe.global",
  },
];

const suplist = [
  {
    title: "Discover DApp",
    icon: suportIcon1,
    content:
      "There are various DApps on Token 13 such as cryptocurrency wallets, decentralized exchanges, games, and financial services.You have complete control over your data and assets without relying on third-party intermediaries.",
  },
  {
    title: "Flash Exchange",
    icon: suportIcon2,
    content:
      "Token 13 is a fast and convenient decentralized transaction method. Use smart contracts and cross-chain technology to ensure the security and reliability of transactions.",
  },
  {
    title: "Batch Transfer",
    icon: suportIcon3,
    content:
      "Use the Token 13 batch transfer function to send assets to multiple addresses at once, thereby saving handling fees and time. Improve efficiency, reduce costs and reduce the risk of human error.",
  },
  {
    title: "Hardware Equipment",
    icon: suportIcon4,
    content:
      "Use secure transmission protocols and encryption algorithms to ensure security during data transmission and prevent unauthorized data theft or tampering.And supports multiple authentication mechanisms to ensure that only authorized users can access and operate.You can store Token 13 data with confidence, avoid data leakage and risks, and improve overall security and protection capabilities.",
  },
  {
    title: "TRX Vote",
    icon: suportIcon5,
    content:
      "Through the voting function of Token 13, support your recognized super representatives or candidate representatives to help them obtain more voting rights, thereby influencing the development direction and decision-making results of the TRON network and obtaining rewards or benefits.",
  },
  {
    title: "Cross-chain exchange",
    icon: suportIcon6,
    content:
      "Token 13 can exchange or transfer digital assets. Help you achieve asset liquidity and interoperability between different blockchain networks and promote the development and integration of the blockchain ecosystem.",
  },
];

export function SuportItem({ title, icon, content }) {
  const { t } = useTranslation();
  return (
    <div className={style.suportBox}>
      <header className={style.suportHeader}>{t(title)}</header>
      <img className={style.suportIcon} src={icon} alt="" />
      <div className={style.suportContent}>{t(content)}</div>
    </div>
  );
}

export default function SuportList() {
  const { t } = useTranslation();

  return (
    <div className={style.suportContainer}>
      <div className={style.suportHeader}>{t("Supported Web3-Wide")}</div>
      <div className={style.tipList}>
        {tips.map((item, index) => (
          <div className={style.tip} key={index}>
            <img className={style.tipIcon} src={ellips} alt="" />
            <span>{item.content}</span>
          </div>
        ))}
      </div>
      <div className={style.supportList}>
        {suplist.map((item, index) => (
          <SuportItem
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
          ></SuportItem>
        ))}
      </div>
    </div>
  );
}
