import React, { useState } from "react";
import SuportList from "../../components/SuportList";
import CarouselBox from "../../components/Carousel";
import ReadyExplore from "../../components/ReadyExplore";
import HomeTitle from "../../components/HomeTitle";
import HomeDownload from "../../components/HomeDownload";
import Assess from "../../components/Assess";
import style from "./index.module.less";
import { useTranslation } from "react-i18next";
import homePreview from "../../image/home-preview.png";
import marketPreview from "../../image/market-preview.png";
import homePreviewZh from "../../image/home-preview-zh.png";
import marketPreviewZh from "../../image/market-preview-zh.png";


export default function Index() {
  const { i18n } = useTranslation()
  const isZh = useState(i18n.language === 'zh')
  return (
    <div className={style.homeContainer}>
      {/* 标题 */}
      <div className={style.bannner}>
            <HomeTitle />
            {/* 下载按钮组 */}
            <HomeDownload />

            {/* screen组 */}
            <div className={style.previewGroup}>
              <div className={style.floor}>
                <img src={ isZh ? marketPreviewZh: marketPreview} alt="" />
              </div>
              <div>
                <img src={ isZh? homePreviewZh: homePreview} alt="" />
              </div>
            </div>
      </div>
    

      {/* 准备好探索token13了吗 explore */}
      <ReadyExplore />
      {/* 支持web3-wide */}
      <SuportList />
      {/* 轮播图 */}
      <CarouselBox />
      {/* 评价列表 */}
      <Assess />
    </div>
  );
}
