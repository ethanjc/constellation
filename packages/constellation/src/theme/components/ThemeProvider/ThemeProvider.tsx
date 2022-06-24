import './output.css'

import { InterFontProvider } from 'components/Font'
import React, { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeProviderComponent } from './ThemeProvider.types'

const ThemeProvider = ({ children, theme }) => {
  return <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>{children}</div>

  return (
    <StyledThemeProvider theme={theme}>
      <InterFontProvider>{children}</InterFontProvider>
    </StyledThemeProvider>
  )
}

export default ThemeProvider
