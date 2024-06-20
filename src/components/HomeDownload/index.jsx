/* eslint-disable react/prop-types */
import React, { useState } from "react";
import style from "./index.module.less";
import iPhone from "../../icon/iPhone.png";
import android from "../../icon/android.png";
import iPhoneSelect from "../../icon/iPhoneSelect.png";
import androidSelect from "../../icon/androidSelect.png";
const btnList = [
  {
    title: "Download on the",
    label: "Apple Store",
    icon: iPhone,
    selectIcon: iPhoneSelect,
    url: "https://apps.apple.com/vn/app/token17/id6504523429",
  },
  {
    title: "Download APK",
    label: "android",
    icon: android,
    selectIcon: androidSelect,
    url: "https://apps.apple.com/vn/app/token17/id6504523429",
  },
];

// 按钮组件
export function DownloadBtn({ title, url, label, icon, selectIcon, vertical }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${style.downloadBtn}   ${isHovered && style.selectDownloadBtn}`}
      style={vertical && { margin: "5px" }}
      onClick={() => {
        window.open(url, "_blank");
      }}
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img className={style.icon} src={isHovered ? selectIcon : icon} alt="" />
      <div className={style.contentBox}>
        <header className={style.header}>{title}</header>
        <div className={style.content}>{label}</div>
      </div>
    </div>
  );
}

export default function HomeDownload({ vertical }) {
  return (
    <div
      className={style.downLoadGroup}
      style={
        vertical && {
          flexDirection: "column",
          marginTop: "0",
        }
      }
    >
      {btnList.map((item, index) => (
        <DownloadBtn
          key={index}
          title={item.title}
          label={item.label}
          icon={item.icon}
          url={item.url}
          selectIcon={item.selectIcon}
          vertical={vertical}
        ></DownloadBtn>
      ))}
    </div>
  );
}
