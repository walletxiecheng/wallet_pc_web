// src/themes.js
import { extendTheme } from '@chakra-ui/react'
const lightTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black'
      }
    }
  }
})

const darkTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'white'
      }
    }
  }
})

export { lightTheme, darkTheme }
