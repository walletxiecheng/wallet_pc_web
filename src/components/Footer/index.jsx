import React from "react";
import { useTranslation } from "react-i18next";
import style from "./index.module.less";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className={style.footerContainer}>
      <div className={style.footerBox}>
        <p className={style.copyright}>
          ©Vanilla 2023-2024 {t(". All Rights Reserved.")}
        </p>
        <p className={style.agreement}>
          <Link to='/agreem'  className={style.link} >{t("User Agreement")}</Link>
          <Link  to='/privacy' className={style.link} >{t("Privacy Policy")}</Link>
        </p>
      </div>
    </div>
  );
}
