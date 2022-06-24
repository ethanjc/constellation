import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Slider, SliderComponent } from '.'

export default {
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Boolean indicating if the switch is activated/checked or not.',
    },
    color: {
      control: { type: 'select' },
      defaultValue: 'primary',
      description: 'The rendering color of the switch.',
      options: ['primary', 'secondary'],
    },
    disabled: {
      description: 'Its a slider',
    },
  },
  component: Slider,
  title: 'Components/Slider',
} as ComponentMeta<SliderComponent>

const Template: ComponentStory<SliderComponent> = ({ value: defaultValue = 0, ...args }) => {
  return <Slider />
}

export const Primary = Template.bind({})
