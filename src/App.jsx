import { RouterProvider } from 'react-router-dom'
import style from '@/App.module.less'
import routes from '@/routes'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { darkTheme } from '@/theme.js'

function App() {
  return (
    <div className={style.appContainer}>
      <ChakraProvider theme={darkTheme}>
        <ColorModeScript initialColorMode={darkTheme.config.initialColorMode} />
        <RouterProvider router={routes} />
      </ChakraProvider>
    </div>
  )
}
export default App
