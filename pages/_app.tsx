import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { UIProvider } from '../context/ui';
import { darkTheme, lightTheme } from '../themes';
import { EntriesProvider } from '../context/entries';



export default function App({ Component, pageProps }: AppProps) {
  return (

    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={ darkTheme }>
          <CssBaseline/>
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
    
  )
}
