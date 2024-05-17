/* eslint-disable react/prop-types */
import React from "react";
import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import style from "./index.module.less";
import carouselPc1 from "../../image/carousel1.png";
import carouselPc2 from "../../image/carousel2.png";
import carouselPc3 from "../../image/carousel3.png";
import carouselPc4 from "../../image/carousel4.png";
import logoLight from "../../icon/logoLight.png";
const carouselItem = [
  {
    title: "Provide bank grade",
    subTitle: "Security guarantee, multiple verification",
    content:
      "Token 13 is a mobile app that provides you with bank-grade security and multi-factor authentication to help you manage and protect your digital assets. Whether it's cryptocurrency, digital collections, or other digital assets, Token 13 provides all the features you need to manage your financial assets with peace of mind.",
    image: carouselPc1,
  },
  {
    title: "Easily manage digital assets",
    subTitle: "Always in control",
    content:
      "Token 13 is the easiest and most secure way to connect to blockchain-based applications. Whenever you interact with the new decentralized network, you are always in control. Token 13 allows you to easily manage your digital assets, ensure security, and always be under your control.",
    image: carouselPc2,
  },
  {
    title: "Only on your device",
    subTitle: "Generate passwords and keys",
    content:
      "Token 13 generates passwords and keys on your device, ensuring only you can access your accounts and data. This security measure protects your privacy and the security of your digital assets, allowing you to manage your accounts and data with confidence.",
    image: carouselPc3,
  },
  {
    title: "Self-hosted encryption",
    subTitle: "Don't share with others",
    content:
      "Token 13 is a self-hosted wallet and the private keys are encrypted on your device and never shared with anyone. We will never track your personally identifiable information, account addresses or asset balances, ensuring your privacy is protected to the greatest extent possible. You can use Token 13 to manage your digital assets without worrying about the risk of personal information leakage.",
    image: carouselPc4,
  },
];

export function CarouselItem({ image, title, content, subTitle }) {
  const { t } = useTranslation();
  return (
    <div className={style.toolContainer}>
      {/* 轮播图片 */}
      <div>
        <img src={image} alt="" />
      </div>
      {/* 右侧介绍 */}
      <div>
        <header className={style.header}>
          <img className={style.logo} src={logoLight} alt="" />
          <div className={style.toolTitle}>{t(title)}</div>
          <div className={style.toolTitle}>{t(subTitle)}</div>
          <div className={style.toolContent}>{t(content)}</div>
        </header>
      </div>
    </div>
  );
}

export default function CarouselBox() {
  const { t } = useTranslation();

  return (
    <div className={style.carouseContainer}>
      <header className={style.header}>
        <div className={style.title}>{t("Secure Self-Hosted Wallet")}</div>
        <div className={style.content}>
          {t(
            "Use encryption technology to protect users' private keys and transaction information, and provide secure storage and management functions to help you better protect and manage digital assets.",
          )}
        </div>
      </header>
      {/* 轮播图 */}
      <Carousel autoplay infinite dots={{ className: style.carouselDot }}>
        {carouselItem.map((item, index) => (
          <CarouselItem
            key={index}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            content={item.content}
          ></CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}
