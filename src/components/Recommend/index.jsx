import React from "react";
import HomeDownload from "../HomeDownload";
import { useTranslation } from "react-i18next";
import style from "./index.module.less";
import qrCodePc from "../../image/qrCode.png";
export default function Recommend() {
  const { t } = useTranslation();
  return (
    <div className={style.recoContainer}>
      <div className={style.content}>
        <header className={style.title}>
          {t("Get started with Token 17")}
        </header>
        <div className={style.words}>
          {t(
            "The private key is stored locally through multiple encryption algorithms to ensure the security of funds. We cannot collect any personal information.",
          )}
        </div>
      </div>
      <div className={style.downLoadWay}>
        <div>
          <img  width={116} className={style.qrcode} src={qrCodePc} alt="" />
        </div>
        <HomeDownload vertical={true}></HomeDownload>
      </div>
    </div>
  );
}
