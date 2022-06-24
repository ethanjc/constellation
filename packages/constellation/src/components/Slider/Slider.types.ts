import { SliderProps as RadixSliderProps } from '@radix-ui/react-slider'
import { FC } from 'react'

import { SwitchTheme } from './theme'

type SliderProps = RadixSliderProps & {
  color?: keyof SwitchTheme['colors']
  size?: keyof SwitchTheme['sizes']
}

type SliderComponent = FC<SliderProps>

export type { SliderComponent, SliderProps }
