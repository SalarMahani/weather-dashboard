import createCache from '@emotion/cache'
import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from 'stylis'

export const createEmotionCache = (isRTL: boolean) =>
  createCache({
    key: isRTL ? 'rtl' : 'ltr',
    stylisPlugins: isRTL ? [prefixer, rtlPlugin] : [],
  })
