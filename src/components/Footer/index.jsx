import React from "react";
import { useTranslation } from "react-i18next";
import style from "./index.module.less";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className={style.footerContainer}>
      <div className={style.footerBox}>
        <p className={style.copyright}>
          ©Vanilla 2023-2024 {t(". All Rights Reserved.")}
        </p>
        <p className={style.agreement}>
          <span>{t("User Agreement")}</span>
          <span className={style.privacy}>{t("Privacy Policy")}</span>
        </p>
      </div>
    </div>
  );
}
