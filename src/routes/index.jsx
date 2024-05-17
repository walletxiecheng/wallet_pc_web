import * as React from "react";
import { useRoutes } from "react-router-dom";
// 引入所需的依赖文件
// 引入所需要路由的页面
import Index from "../pages/Index";
import Privacy from "../pages/Privacy";
import Agreement from "../pages/Agreement";
export default function Router() {
  const element = useRoutes([
    {
      path: "/",
      element: <Index></Index>,
    },
    {
      path: "/index",
      element: <Index></Index>,
    },
    {
      path: "/privacy",
      element: <Privacy />,
    },
    {
      path: "/agree",
      element: <Agreement />,
    },
  ]);
  return element;
}
