import * as SliderPrimitive from '@radix-ui/react-slider'
import classnames from 'classnames'
import React from 'react'

import { SliderComponent } from './Slider.types'

const Slider: SliderComponent = ({ color = 'primary', size = 'default', ...props }) => {
  return (
    <SliderPrimitive.Root
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label='value'
      className='relative flex h-5 w-64 touch-none items-center'
    >
      <SliderPrimitive.Track className='relative h-1 w-full grow rounded-full bg-medium'>
        <SliderPrimitive.Range className='absolute h-full rounded-full bg-primary' />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className='block h-5 w-5 rounded-full bg-background border-background-light focus:outline-none drop-shadow-control theme-dark:bg-dark-500' />
    </SliderPrimitive.Root>
  )
}

export default Slider
