import React from 'react'
import style from './index.module.less'
import NavBar from '@/components/NavBar'
import { ChakraProvider, CSSReset, useColorMode } from '@chakra-ui/react'
import { lightTheme, darkTheme } from '@/theme.js'
export default function BaseLayout() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div
      className={style.layoutContainer}
      theme={colorMode === 'light' ? lightTheme : darkTheme}
    >
      <ChakraProvider>
        <CSSReset />
        <header>
          {/* 顶部导航 */}
          <NavBar toggleColorMode={toggleColorMode} />
        </header>
        <main>{/* 主体部分 */}2</main>
        <footer>3</footer>
      </ChakraProvider>
    </div>
  )
}
