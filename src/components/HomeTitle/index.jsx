import React from "react";
import { useTranslation } from "react-i18next";
import style from "./index.module.less";

export default function HomeTitle() {
  const { t } = useTranslation();

  return (
    <header className={style.header}>
      <div className={style.mainTitle}>{t("True Self Custodial")}</div>
      <div className={style.subTitle}>{t("Web3 Wallet")}</div>
      <div className={style.description}>
        <span>{t("description")}</span>
      </div>
    </header>
  );
}
