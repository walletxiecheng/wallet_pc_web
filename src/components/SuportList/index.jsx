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

import bg1 from "../../image/s1.png"
import bg2 from "../../image/s2.png"
import bg3 from "../../image/s3.png"
import bg4 from "../../image/s4.png"
import bg5 from "../../image/s5.png"
import bg6 from "../../image/s6.png"


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
    content: "There are various DApps such as cryptocurrency wallets and financial services on Token 17. and have full control over their own data and assets",
    bakground: bg1
  },
  {
    title: "Flash Exchange",
    icon: suportIcon2,
    content:"Token 17 is a fast and convenient decentralized transaction method. Use smart contracts and cross-chain technology to ensure transaction security and reliability.",
    bakground: bg2
    },
  {
    title: "Batch Transfer",
    icon: suportIcon3,
    content:"Use Token 17 to send assets to multiple addresses at once, saving handling fees and time. Improve efficiency and reduce the risk of human error.",
    bakground: bg3
    },
  {
    title: "Hardware Equipment",
    icon: suportIcon4,
    content:"For storing and protecting your cryptocurrency assets. Thereby increasing the security of assets.",
    bakground: bg4
    },
  {
    title: "TRX Vote",
    icon: suportIcon5,
    content:"Deposit TRX tokens via Token 17 to vote for super representatives on the TRON network and get rewards.",
     bakground: bg5
    },
  {
    title: "Cross-chain exchange",
    icon: suportIcon6,
    content:"Token 17 can exchange or transfer digital assets. Help you achieve asset liquidity and interoperability between different blockchain networks.",
      bakground: bg6
    },
];

export function SuportItem({ title, icon, content, bakground}) {
  const { t } = useTranslation();
  return (
    <div className={style.suportBox}>
      <img className={style.suportBg} src={bakground} alt="" />
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
            bakground={item.bakground}
          ></SuportItem>
        ))}
      </div>
    </div>
  );
}
