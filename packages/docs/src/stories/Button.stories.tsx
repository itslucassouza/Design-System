import React from 'react'
import { StoryObj, Meta} from '@storybook/react'
import { ArrowRight } from 'phosphor-react'
 
import { Button, ButtonProps } from '@itslucassouza-dev/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio'
      }
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick:  {
      action:'click'
    }
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Proximo passo
        <ArrowRight weight='bold' />
      </>
    )
  }
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'cancell'
  }
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm'
  }
}





