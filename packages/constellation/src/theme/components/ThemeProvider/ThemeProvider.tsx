import './output.css'

import React, { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeProviderComponent } from './ThemeProvider.types'

const ThemeProvider: ThemeProviderComponent = ({ children, theme }) => {
  return <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>{children}</div>
}

export default ThemeProvider
