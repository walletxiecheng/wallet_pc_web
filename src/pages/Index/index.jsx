import React from "react";
import SuportList from "../../components/SuportList";
import CarouselBox from "../../components/Carousel";
import homePreview from "../../image/home-preview.png";
import marketPreview from "../../image/market-preview.png";
import ReadyExplore from "../../components/ReadyExplore";
import HomeTitle from "../../components/HomeTitle";
import HomeDownload from "../../components/HomeDownload";
import Assess from "../../components/Assess";
import Recommend from "../../components/Recommend";
import style from "./index.module.less";
export default function Index() {
  return (
    <div className={style.homeContainer}>
      {/* 标题 */}
      <HomeTitle />
      {/* 下载按钮组 */}
      <HomeDownload />

      {/* screen组 */}
      <div className={style.previewGroup}>
        <div className={style.floor}>
          <img src={marketPreview} alt="" />
        </div>
        <div>
          <img src={homePreview} alt="" />
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
      {/* 推荐下载方式 */}
      <Recommend />
    </div>
  );
}
