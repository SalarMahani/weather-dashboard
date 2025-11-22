import { createContext, useContext } from 'react'

export type ThemeModeContextType = {
  mode: 'light' | 'dark'
  setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
  language: 'fa' | 'en'
  setLanguage: React.Dispatch<React.SetStateAction<'fa' | 'en'>>
}

export const ThemeModeContext = createContext<ThemeModeContextType | null>(null)

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext)
  if (!ctx)
    throw new Error(
      'useThemeMode must be used inside <ThemeModeContext.Provider>',
    )
  return ctx
}
