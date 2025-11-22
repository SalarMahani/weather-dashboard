import { ThemeProvider, CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { useMemo } from 'react'
import lightTheme from './lightTheme.ts'
import darkTheme from './darkTheme.ts'
import { createEmotionCache } from './emotionCashe.ts'

type Props = {
  children: React.ReactNode
  lang: 'en' | 'fa'
  mode: 'light' | 'dark'
}

export default function ThemeConfig({ children, lang, mode }: Props) {
  const isRTL = lang === 'fa'

  // 1. Pick light/dark
  const baseTheme = mode === 'light' ? lightTheme : darkTheme

  // 2. Add direction dynamically
  const theme = useMemo(
    () => ({
      ...baseTheme,
      direction: isRTL ? 'rtl' : 'ltr',
    }),
    [baseTheme, isRTL],
  )

  // 3. RTL/LTR Emotion cache
  const cache = useMemo(() => createEmotionCache(isRTL), [isRTL])

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* ⬅️ You get your CssBaseline here */}
        <div dir={isRTL ? 'rtl' : 'ltr'}>{children}</div>
      </ThemeProvider>
    </CacheProvider>
  )
}
